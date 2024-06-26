import type React from 'react';
import type { Root, Viewport } from '@lotus-design/react-primitives/es/scroll-area';

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof Root> {
  viewportProps?: React.ComponentProps<typeof Viewport>;
  scrollbars?: 'x' | 'y' | 'xy' | false;
  size?: 'small' | 'default';
  theme?: 'dark' | 'light';
}
