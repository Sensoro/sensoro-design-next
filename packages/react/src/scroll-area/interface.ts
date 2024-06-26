import type React from 'react';
import type { Root } from '@lotus-design/react-primitives/es/scroll-area';

export interface ScrollAreaProps extends React.ComponentPropsWithoutRef<typeof Root> {
  viewportProps?: {
    className?: string;
    style?: React.CSSProperties;
  };
  scrollbars?: 'x' | 'y' | 'xy' | false;
  size?: 'small' | 'default';
  theme?: 'dark' | 'light';
}
