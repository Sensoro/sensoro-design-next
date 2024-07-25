import type { AxisConfig, StyleConfig } from './types';

export const DEFAULT_STYLE_CONFIG: StyleConfig = {
  radiusTopLeft: 1,
  radiusTopRight: 1,
};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    line: true,
    tick: false,
  },
};
