import { colorGrey10 } from '../../config/colors';
import type {
  AxisConfig,
  InteractionConfig,
  ScaleConfig,
  StyleConfig,
} from './types';

export const DEFAULT_STYLE_CONFIG: StyleConfig = {
  radius: 1,
  maxWidth: 8,
};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    size: 110,
    labelAutoEllipsis: true,
    tick: false,
    title: false,
    labelFontSize: 12,
    labelFill: colorGrey10,
    labelFillOpacity: 0.6,
    labelSpacing: 16,
  },
  y: {
    grid: false,
    tick: false,
    label: false,
    title: false,
  },
};

export const DEFAULT_INTERACTION_CONFIG: InteractionConfig = {
  elementHighlight: false,
};

export const DEFAULT_SCALE_CONFIG: ScaleConfig = {
  y: {
    domain: [0, 1000],
  },
};
