import type {
  AxisConfig,
  InteractionConfig,
  LineConfig,
  StyleConfig,
} from './types';

export const DEFAULT_Style_CONFIG: StyleConfig = {
  fillOpacity: 0.15,
};

export const DEFAULT_Line_CONFIG: LineConfig = {};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    line: true,
    grid: false,
  },
};

export const DEFAULT_INTERACTION_CONFIG: InteractionConfig = {
  tooltip: {
    crosshairsY: true,
  },
};
