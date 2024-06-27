import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import * as ScrollAreaPrimitive from '@lotus-design/react-primitives/es/scroll-area';
import { useConfigContext } from '../config-provider';
import { ScrollBar } from './ScrollBar';
import type { ScrollAreaProps } from './interface';

export const ScrollArea = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>((
  {
    className,
    children,
    viewportRef,
    viewportProps,
    scrollbars = 'xy',
    size = 'default',
    theme = 'light',
    onScrollPositionChange,
    ...props
  },
  ref,
) => {
  const { getPrefixCls } = useConfigContext('ScrollArea');

  const prefixCls = getPrefixCls!('scroll-area');

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={clsx(
        prefixCls,
        {
          [`${prefixCls}-small`]: size === 'small',
          [`${prefixCls}-dark`]: theme === 'dark',
        },
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        {...viewportProps}
        className={clsx(`${prefixCls}-viewport`, viewportProps?.className)}
        onScroll={(e) => {
          viewportProps?.onScroll?.(e);
          onScrollPositionChange?.({
            x: e.currentTarget.scrollLeft,
            y: e.currentTarget.scrollTop,
          });
        }}
        ref={viewportRef}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>

      {(scrollbars === 'xy' || scrollbars === 'x') && (
        <ScrollBar orientation="horizontal" />
      )}

      {(scrollbars === 'xy' || scrollbars === 'y') && (
        <ScrollBar orientation="vertical" />
      )}

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
