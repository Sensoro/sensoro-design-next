import type { AxisConfig, InteractionConfig, LineConfig } from './types';

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
