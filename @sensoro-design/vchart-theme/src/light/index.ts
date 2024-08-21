import type { ITheme } from '@visactor/vchart';
import { token } from '../token';
import { colorScheme } from './colorScheme';

export const light: ITheme = {
  name: 'senLight',
  description: 'Sensoro Design - light',
  type: 'light',
  token,
  colorScheme,
};
