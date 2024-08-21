import type { ITheme } from '@visactor/vchart';
import { light } from './light';
import { dark } from './dark';

export const allThemeMap = new Map([
  [light.name, light],
  [dark.name, dark],
]) as Map<string, ITheme>;
