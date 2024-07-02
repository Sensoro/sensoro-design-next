import React, { forwardRef } from 'react';
import * as ScrollAreaPrimitive from '@lotus-design/react-primitives/es/scroll-area';
import { useConfigContext } from '../config-provider';

export const ScrollBar = forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, ...props }, ref) => {
  const { getPrefixCls } = useConfigContext('ScrollArea');
  const prefixCls = getPrefixCls!('scroll-area');

  return (
    <ScrollAreaPrimitive.Scrollbar
      ref={ref}
      className={`${prefixCls}-scrollbar`}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb className={`${prefixCls}-thumb`} />
    </ScrollAreaPrimitive.Scrollbar>
  );
});

ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;
