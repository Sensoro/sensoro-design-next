import { ThemeManager } from '@visactor/vchart';
import { light } from '@sensoro-design/vchart-theme';

export { default as Common } from './common';
export type { CommonProps } from './common';

export { default as Line } from './line';
export type { LineProps } from './line';

export { default as CirclePacking } from './circle-packing';
export type { CirclePackingProps } from './circle-packing';

ThemeManager.registerTheme('senLight', light);
ThemeManager.setCurrentTheme('senLight');
