import type {
  AxisConfig,
  InteractionConfig,
  ScaleConfig,
  StyleConfig,
} from './types';

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

export const DEFAULT_SCALE_CONFIG: ScaleConfig = {
  x: {
    padding: 0.6,
  },
};

export const DEFAULT_INTERACTION_CONFIG: InteractionConfig = {
  elementHighlight: false,
};
