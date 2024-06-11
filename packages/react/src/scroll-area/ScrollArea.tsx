import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import { AutoHeight, Corner, Root, Viewport, useScrollAreaContext } from '@lotus-design/react-primitives/es/scroll-area';
import { useConfigContext } from '../config-provider';
import { ScrollBar } from './ScrollBar';
import type { ScrollAreaProps } from './interface';

const InternalCompoundedScrollArea = forwardRef<
  React.ElementRef<typeof Root>,
  ScrollAreaProps
>((
  {
    className,
    children,
    size = 'default',
    theme = 'light',
    ...props
  },
  ref,
) => {
  const { getPrefixCls } = useConfigContext('ScrollArea');

  const prefixCls = getPrefixCls!('scroll-area');

  return (
    <Root
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
      <Viewport className={`${prefixCls}-viewport`}>
        {children}
      </Viewport>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
      <Corner />
    </Root>
  );
});

type CompoundedComponent = typeof InternalCompoundedScrollArea & {
  AutoHeight: typeof AutoHeight;
  useScrollAreaContext: typeof useScrollAreaContext;
};

const ScrollArea = InternalCompoundedScrollArea as CompoundedComponent;

ScrollArea.AutoHeight = AutoHeight;
ScrollArea.useScrollAreaContext = useScrollAreaContext;
ScrollArea.displayName = Root.displayName;

export default ScrollArea;
