import type {
  AxisConfig,
  LineConfig,
  StyleConfig,
} from './types';

export const DEFAULT_STYLE_CONFIG: StyleConfig = {
  fillOpacity: 0.15,
};

export const DEFAULT_LINE_CONFIG: LineConfig = {};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    line: true,
    grid: false,
  },
};
