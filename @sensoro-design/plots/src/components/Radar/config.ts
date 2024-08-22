import type { AreaConfig, AxisConfig, PointConfig } from './types';

export const DEFAULT_AREA_CONFIG: AreaConfig = {
  style: {
    fillOpacity: 0.15,
  },
};

export const DEFAULT_POINT_CONFIG: PointConfig = {
  size: 2,
  style: {
    // TODO: 黑色主题下怎么处理？
    fill: 'white',
  },
};

export const DEFAULT_AXIS_CONFIG: AxisConfig = {
  x: {
    line: false,
    tick: null,
    labelSpacing: 12,
  },
  y: {
    labelSpacing: 4,
    gridConnect: 'line',
    gridLineWidth: 1,
    zIndex: 0,
    gridLineDash: [3, 2],
  },
};
