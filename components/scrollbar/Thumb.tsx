import React, { useRef, useState, useContext, } from 'react';
import { classNames } from '@pansy/shared';
import { ConfigContext } from '../config-provider';
import { BAR_MAP } from './utils';
import useStyle from './style';

export interface ThumbProps {
  prefixCls?: string;
  /**
   * 滚动条方向
   * @default 'horizontal'
   */
  direction?: 'vertical' | 'horizontal';
  size?: number;
  move?: number;
  ratio: number;
  always?: boolean;
}

export const genThumbStyle = ({
  move,
  size,
  bar,
}: Pick<ThumbProps, 'move' | 'size'> & {
  bar: typeof BAR_MAP[keyof typeof BAR_MAP]
}): React.CSSProperties => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`,
})

export const Thumb: React.FC<ThumbProps> = (props) => {
  const {
    prefixCls: customizePrefixCls,
    size,
    move,
    always,
    direction = 'horizontal'
  } = props;
  const instanceRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('bar', customizePrefixCls);
  const [ ,hashId] = useStyle(prefixCls);

  const [visible, setVisible] = useState(false);
  const [thumbState, setThumbState] = useState<Partial<Record<'X' | 'Y', number>>>({});

  const bar = BAR_MAP[direction];
  const thumbStyle = genThumbStyle({
    size,
    move,
    bar: bar,
  });

  const clickTrackHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);

  }

  const clickThumbHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
  }

  return (
    <div
      ref={instanceRef}
      className={classNames(`${prefixCls}-bar`, {
        [`${prefixCls}-bar-${direction}`]: true
      })}
      onMouseDown={clickTrackHandler}
    >
      <div
        ref={thumbRef}
        style={thumbStyle}
        className={`${prefixCls}-thumb`}
        onMouseDown={clickThumbHandler}
      />
    </div>
  );
}
