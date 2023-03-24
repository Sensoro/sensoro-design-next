import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Thumb } from './Thumb';
import { GAP } from './utils';

export interface BarProps {
  prefixCls?: string;
  always?: boolean;
  width?: number;
  height?: number;
  ratioX?: number;
  ratioY?: number;
}

export interface BarRef {
  handleScroll: (warp: HTMLDivElement) => void;
}

export const InternalBar: React.ForwardRefRenderFunction<any,BarProps> = (props, ref) => {
  const {
    prefixCls,
    always,
    ratioX = 1,
    ratioY = 1,
    width,
    height
  } = props;

  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        handleScroll,
      }
    },
    []
  )

  const handleScroll = (wrap: HTMLDivElement) => {
    if (wrap) {
      const offsetHeight = wrap.offsetHeight - GAP;
      const offsetWidth = wrap.offsetWidth - GAP;

      setMoveY(((wrap.scrollTop * 100) / offsetHeight) * ratioY);
      setMoveX(((wrap.scrollLeft * 100) / offsetWidth) * ratioX);
    }
  }

  return (
    <>
      <Thumb prefixCls={prefixCls} always={always} move={moveX} ratio={ratioX!} size={width} />
      <Thumb prefixCls={prefixCls} always={always} direction="vertical" move={moveY} ratio={ratioY!} size={height} />
    </>
  );
}

export const Bar = forwardRef<any, BarProps>(InternalBar);
