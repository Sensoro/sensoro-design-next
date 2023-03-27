import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useContext,
  useMemo,
  useState,
  forwardRef,
} from 'react';
import { classNames, isNumber } from '@pansy/shared';
import { useSize, useEventListener } from '@pansy/react-hooks';
import { ConfigContext } from '../config-provider';
import { Bar } from './Bar';
import { addUnit } from '../_utils/style';
import { GAP } from './utils';
import useStyle from './style';

export type ScrollbarSize = 'small' | 'default';
export interface ScrollbarProps {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  /**
   * 滚动容器高度
   */
  height?: number | string;
  /**
   * 滚动容器最大高度
   */
  maxHeight?: number | string;
  /**
   * 是否使用原生滚动条样式
   * @default false
   */
  native?: boolean;
  /**
   * 容器的自定义类名
   */
  wrapClassName?: string;
  /**
   * 容器的自定义样式
   */
  wrapStyle?: React.CSSProperties;
  /**
   * 视图的自定义类名
   */
  viewClassName?: string;
  /**
   * 视图的自定义样式
   */
  viewStyle?: React.CSSProperties;
  /**
   * 不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能
   */
  noresize?: boolean;
  /**
   * 滚动条总是显示
   * @default false
   */
  always?: boolean;
  /**
   * 滚动条尺寸
   * @default 'default'
   */
  size?: ScrollbarSize;
  /**
   * 滚动条最小尺寸
   * @default 20
   */
  minSize?: number;
  onScroll?: (e: { scrollLeft: number, scrollTop: number }) => void;
  children?: React.ReactNode;
}

export interface ScrollbarRef {
  /**
   * 滚动到一组特定坐标
   * @param xCoord
   * @param yCoord
   * @returns
   */
  scrollTo: (xCoord: ScrollToOptions | number, yCoord?: number) => void;
  /**
   * 设置滚动条到顶部的距离
   * @param value
   * @returns
   */
  setScrollTop: (value: number) => void;
  /**
   * 设置滚动条到左边的距离
   * @param value
   * @returns
   */
  setScrollLeft: (value: number) => void;
  /**
   * 手动更新滚动条状态
   * @returns
   */
  update: () => void;
}

export const InternalScrollbar: React.ForwardRefRenderFunction<ScrollbarRef, ScrollbarProps> = (props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    native = false,
    always = false,
    height,
    maxHeight,
    wrapStyle,
    viewStyle,
    size: customizeSize,
    minSize = 20,
    children,
    onScroll,
  } = props;
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  const size = useSize(wrapRef);

  // ===================== Style =====================
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('scrollbar', customizePrefixCls);
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const classes = classNames(
    prefixCls,
    hashId,
    {
      [`${prefixCls}-small`]: customizeSize === 'small',
    },
    className,
  );
  const mergeWrapStyle = useMemo(() => {
    const style: React.CSSProperties = {
      ...wrapStyle
    };

    if (height) {
      style.height = addUnit(height)
    }

    if (maxHeight) {
      style.maxHeight = addUnit(maxHeight)
    }

    return style;
  }, [wrapStyle, height, maxHeight]);

  const [sizeHeight, setSizeHeight] = useState<number | undefined>(0);
  const [sizeWidth, setSizeWidth] = useState<number | undefined>(0);

  const [ratioY, setRatioY] = useState<number>(1);
  const [ratioX, setRatioX] = useState<number>(1);

  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  useEffect(() => {
    update();
  }, [size])

  const update = () => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const offsetHeight = wrap.offsetHeight - GAP;
    const offsetWidth = wrap.offsetWidth - GAP;
    const scrollHeight = wrap.scrollHeight;
    const scrollWidth = wrap.scrollWidth;

    // 计算滚动条尺寸
    const originalHeight = offsetHeight ** 2 / scrollHeight;
    const originalWidth = offsetWidth ** 2 / scrollWidth;
    const height = Math.max(originalHeight, minSize);
    const width = Math.max(originalWidth, minSize);

    setSizeHeight(height + GAP < offsetHeight ? height : undefined);
    setSizeWidth(width + GAP < offsetWidth ? width : undefined);

    // 计算滚动条尺寸
    const ratioY = (
      originalHeight /
      (offsetHeight - originalHeight) /
      (height / (offsetHeight - height))
    );
    const ratioX = (
      originalWidth /
      (offsetWidth - originalWidth) /
      (width / (offsetWidth - width))
    );

    setRatioY(ratioY);
    setRatioX(ratioX);
  }

  useEventListener('resize', update)

  useImperativeHandle(ref, () => {
    return {
      scrollTo,
      setScrollTop,
      setScrollLeft,
      update,
    }
  }, [])

  // ===================== ref function =====================
  const handleScroll = () => {
    const wrap = wrapRef.current;

    if (wrap) {
      const offsetHeight = wrap.offsetHeight - GAP;
      const offsetWidth = wrap.offsetWidth - GAP;

      setMoveY(((wrap.scrollTop * 100) / offsetHeight) * ratioY);
      setMoveX(((wrap.scrollLeft * 100) / offsetWidth) * ratioX);

      onScroll?.({
        scrollTop: wrap.scrollTop,
        scrollLeft: wrap.scrollLeft,
      })
    }
  }

  const scrollTo = (xCoord: ScrollToOptions | number, yCoord?: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // if (isObject(arg1)) {
    //   wrap.scrollTo(arg1)
    // }

    if (isNumber(xCoord) && isNumber(yCoord)) {
      wrap.scrollTo(xCoord, yCoord)
    }
  }

  const setScrollTop = (value: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (!isNumber(value)) {
      return
    }
    wrap.scrollTop = value
  }

  const setScrollLeft = (value: number) => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (!isNumber(value)) {
      return
    }
    wrap.scrollTop = value
  }

  return wrapSSR(
    <div ref={scrollbarRef} className={classes} style={style}>
      <div
        ref={wrapRef}
        className={classNames(`${prefixCls}-wrap`, {
          [`${prefixCls}-wrap-hidden`]: !props.native
        })}
        style={mergeWrapStyle}
        onScroll={handleScroll}
      >
        <div ref={viewRef} className={`${prefixCls}-view`} style={viewStyle}>
          {children}
        </div>
      </div>
      {!native && (
        <>
          <Bar prefixCls={prefixCls} wrapElement={wrapRef.current!} always={always} move={moveX} ratio={ratioX!} size={sizeWidth} />
          <Bar prefixCls={prefixCls} wrapElement={wrapRef.current!} always={always} move={moveY} ratio={ratioY!} size={sizeHeight} direction="vertical" />
        </>
      )}
    </div>
  );
}

export const Scrollbar = forwardRef<ScrollbarRef, ScrollbarProps>(InternalScrollbar);
