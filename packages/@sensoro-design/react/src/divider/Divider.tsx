import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import * as SeparatorPrimitive from '@lotus-design/react-primitives/es/divider';
import { useConfigContext } from '../config-provider';

export const Divider = forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>((
  { className, orientation = 'horizontal', decorative = true, ...props },
  ref,
) => {
  const { getPrefixCls } = useConfigContext('Divider');
  const prefixCls = getPrefixCls!('divider');

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={clsx(
        prefixCls,
        className,
      )}
      {...props}
    />
  );
});
