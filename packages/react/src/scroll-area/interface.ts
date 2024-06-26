import type React from 'react';
import type { Root, Viewport } from '@lotus-design/react-primitives/es/scroll-area';

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof Root> {
  viewportRef?: React.ForwardedRef<HTMLDivElement>;
  viewportProps?: React.ComponentProps<typeof Viewport>;
  size?: 'small' | 'default';
  theme?: 'dark' | 'light';
  onScrollPositionChange?: (position: { x: number; y: number }) => void;
}
