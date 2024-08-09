import { colorGrey10 } from '../../config';
import type { AxisConfig, StyleConfig } from './types';

export const DEFAULT_STYLE_CONFIG: StyleConfig = {
  textContent: (target: number, total: number) => {
    return `${!total ? 0 : Math.round((target / total) * 100)}%`;
  },
  textFill: colorGrey10,
  textFontSize: '24px',
  textLineHeight: '24px',
  textFontFamily: 'DIN Alternate',
  textFontWeight: 'bold',
  textY: '70%',
};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    title: false,
  },
  y: {
    tick: false,
    label: false,
  },
};
