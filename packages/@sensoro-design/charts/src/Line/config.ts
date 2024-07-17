import { rgb2arr } from '@antv/util';
import { Blue02 } from '../config';
import type { AreaConfig, PointConfig } from './types';

export const DEFAULT_AREA_CONFIG: AreaConfig = {
  style: {
    opacity: 0.15,
    fill: `linear-gradient(-90deg, white 0%, rgba(${rgb2arr(Blue02).join(',')},.15) 100%)`,
  },
  tooltip: false,
};

export const DEFAULT_POINT_CONFIG: PointConfig = {
  style: {
    size: 2,
    shape: 'circle',
    style: {
      fill: 'white',
      lineWidth: 1,
    },
    tooltip: false,
  },
  tooltip: false,
};
