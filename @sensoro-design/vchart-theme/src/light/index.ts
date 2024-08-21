import type { ITheme } from '@visactor/vchart';
import { token } from '../token';
import { colorGrey08, colorGrey10 } from '../config';
import { colorScheme } from './colorScheme';

export const light: ITheme = {
  name: 'sensoroDesignLight',
  description: 'Sensoro Design - light',
  type: 'light',
  token,
  colorScheme,
  padding: 24,
  component: {
    title: {
      textStyle: {
        fontSize: 16,
        fontWeight: 500,
        fill: colorGrey10,
        lineHeight: 50,
      },
      subtextStyle: {
        fontSize: 12,
        fill: colorGrey08,
      },
      padding: {
        bottom: 24,
      },
    },
  },
};
