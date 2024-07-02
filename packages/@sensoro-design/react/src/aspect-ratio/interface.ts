import type React from 'react';
import type * as AspectRatioPrimitive from '@lotus-design/react-primitives/es/aspect-ratio';
import type { Factory } from '../helpers/factory';

export type AspectRatioProps = React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>;
export type AspectRatioRef = React.ElementRef<typeof AspectRatioPrimitive.Root>;
export type AspectRatioFactory = Factory<{
  props: AspectRatioProps;
  ref: AspectRatioRef;
}>;
