import type React from 'react';
import type {
  AvatarProps as AvatarPrimitiveProps,
} from '@lotus-design/react-primitives/es/avatar';

export interface AvatarProps extends AvatarPrimitiveProps {
  icon?: React.ReactNode;
  shape?: 'circle' | 'square';
  src?: string;
  /**
   * 头像的尺寸大小
   */
  size?: number;
  /**
   * 可点击的头像交互图标
   */
  triggerIcon?: React.ReactNode;
  /**
   * 交互图标的样式
   */
  triggerType?: 'mask' | 'button';
}
