import React, { useEffect, useRef, useContext, useMemo, useState } from 'react';
import { classNames } from '@pansy/shared';
import { useSize } from '@pansy/react-hooks';
import { ConfigContext } from '../config-provider';
import { Bar } from './Bar';
import { addUnit } from '../_utils/style';
import { GAP } from './utils';
import useStyle from './style';

import type { BarRef } from './Bar';

export interface ScrollbarProps {
  prefixCls?: string;
  /**
   * 滚动条高度
   */
  height?: number | string;
  /**
   * 滚动条最大高度
   */
  maxHeight?: number | string;
  /**
   * 是否使用原生滚动条样式
   * @default false
   */
  native?: boolean;
  /**
   * 包裹容器的自定义类名
   */
  wrapClassName?: string;
  /**
   * 包裹容器的自定义样式
   */
  wrapStyle?: React.CSSProperties;
  /**
   * 视图的自定义样式
   */
  viewClassName?: string;
  /**
   * 视图的自定义类名
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
   * 滚动条最小尺寸
   * @default 20
   */
  minSize?: number;
  onScroll?: (e: { scrollLeft: number, scrollTop: number }) => void;
  children?: React.ReactNode;
}

export const Scrollbar: React.FC<ScrollbarProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    native = false,
    always = false,
    height,
    maxHeight,
    wrapStyle,
    viewStyle,
    minSize = 20,
    children,
    onScroll,
  } = props;
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<BarRef>(null);
  const size = useSize(wrapRef);

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('scrollbar', customizePrefixCls);

  const [sizeHeight, setSizeHeight] = useState<number>();
  const [sizeWidth, setSizeWidth] = useState<number>();

  const [ratioY, setRatioY] = useState<number>();
  const [ratioX, setRatioX] = useState<number>();

  const [wrapSSR, hashId] = useStyle(prefixCls);
  const classes = classNames(prefixCls, hashId);

  useEffect(() => {
    const wrap = wrapRef.current;

    if (wrap) {
      const offsetHeight = wrap.offsetHeight;
      const offsetWidth = wrap.offsetWidth;

      const scrollHeight = wrap.scrollHeight;
      const scrollWidth = wrap.scrollWidth

      const originalHeight = offsetHeight ** 2 / scrollHeight;
      const originalWidth = offsetWidth ** 2 / scrollWidth;

      const height = Math.max(originalHeight, minSize);
      const width = Math.max(originalWidth, minSize);

      setRatioY(
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height))
      );
      setRatioX(
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width))
      );

      setSizeHeight(height + GAP < offsetHeight ? height : undefined);
      setSizeWidth(width + GAP < offsetWidth ? height : undefined);
    }
  }, [size])

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

  const handleScroll = () => {
    const wrap = wrapRef.current;

    if (wrap) {
      barRef.current?.handleScroll(wrap);

      onScroll?.({
        scrollTop: wrap.scrollTop,
        scrollLeft: wrap.scrollLeft,
      })
    }
  }

  return wrapSSR(
    <div ref={scrollbarRef} className={classes}>
      <div
        ref={wrapRef}
        className={classNames(`${prefixCls}-wrap`, {
          [`${prefixCls}-wrap-hidden`]: !props.native
        })}
        style={mergeWrapStyle}
        onScroll={handleScroll}
      >
        <div className={`${prefixCls}-view`} style={viewStyle}>
          {children}
        </div>
      </div>
      {!native && (
        <Bar
          prefixCls={prefixCls}
          always={always}
          ratioX={ratioX}
          ratioY={ratioY}
          height={sizeHeight}
          width={sizeWidth}
          ref={barRef}
        />
      )}
    </div>
  );
}
