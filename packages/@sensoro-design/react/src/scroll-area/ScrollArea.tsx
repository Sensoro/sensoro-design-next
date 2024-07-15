import * as React from 'react';
import * as ScrollAreaPrimitive from '@lotus-design/react-primitives/es/scroll-area';
import { clsx } from 'clsx';
import { useConfigContext } from '../config-provider';
import { factory } from '../helpers/factory';
import { ScrollBar } from './ScrollBar';

import type { ScrollAreaFactory } from './interface';

export const ScrollArea = factory<ScrollAreaFactory>((
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
