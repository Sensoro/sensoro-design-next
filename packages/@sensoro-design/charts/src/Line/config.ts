import { rgb2arr } from '@antv/util';
import { Blue2 } from '../config';
import type { AreaConfig, AxisConfig, PointConfig } from './types';

export const DEFAULT_AREA_CONFIG: AreaConfig = {
  style: {
    opacity: 0.2,
    fill: `linear-gradient(-90deg, white 0%, rgba(${rgb2arr(Blue2).join(',')},.15) 100%)`,
  },
  tooltip: false,
};

export const DEFAULT_POINT_CONFIG: PointConfig = {
  size: 2,
  shape: 'circle',
  style: {
    fill: 'white',
    lineWidth: 1,
  },
  tooltip: false,
};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    line: true,
  },
};

export const DEFAULT_INTERACTION_CONFIG: AxisConfig = {
  tooltip: {
    crosshairs: true,
    crosshairsStroke: '#82b6ff',
    crosshairsLineDash: [3, 2],
  },
};
