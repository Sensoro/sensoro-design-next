import type React from 'react';
import type { Primitive } from '@lotus-design/react-primitives/es/primitive';
import type * as ScrollAreaPrimitive from '@lotus-design/react-primitives/es/scroll-area';
import type { Factory } from '../helpers/factory';

type AutosizeElement = React.ElementRef<typeof Primitive.div>;
export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  viewportRef?: React.ForwardedRef<HTMLDivElement>;
  viewportProps?: React.ComponentProps<typeof ScrollAreaPrimitive.Viewport>;
  size?: 'small' | 'default';
  theme?: 'dark' | 'light';
  onScrollPositionChange?: (position: { x: number; y: number }) => void;
}
export type ScrollAreaRef = React.ElementRef<typeof ScrollAreaPrimitive.Root>;

export type ScrollAreaFactory = Factory<{
  props: ScrollAreaProps;
  ref: ScrollAreaRef;
}>;

export type AutosizeFactory = Factory<{
  props: ScrollAreaProps;
  ref: AutosizeElement;
}>;
