import type { ITheme } from '@visactor/vchart';
import { token } from '../token';
import { colorScheme } from './colorScheme';

export const dark: ITheme = {
  name: 'sensoroDesignDark',
  description: 'Sensoro Design - dark',
  type: 'dark',
  token,
  colorScheme,
};
