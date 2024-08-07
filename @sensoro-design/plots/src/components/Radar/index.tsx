import React, { forwardRef } from 'react';
import { Radar as AntRadar } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { RadarConfig as AntRadarConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AREA_CONFIG,
  DEFAULT_AXIS_CONFIG,
  DEFAULT_POINT_CONFIG,
} from './config';
import type { AreaConfig, PointConfig } from './types';

export interface RadarConfig extends Omit<AntRadarConfig, 'area' | 'point' | 'axis'> {
  area?: AntRadarConfig['area'] | boolean;
  point?: AntRadarConfig['point'] | boolean;
  axis?: AntRadarConfig['axis'] | boolean;
}

export const Radar = forwardRef<Chart, RadarConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      area = true,
      point = true,
      axis = true,
      ...rest
    } = props;

    const pointConfig = getItemConfig<PointConfig>(point, DEFAULT_POINT_CONFIG);
    const axisConfig = getItemConfig<PointConfig>(axis, DEFAULT_AXIS_CONFIG);
    const areaConfig = getItemConfig<AreaConfig>(area, DEFAULT_AREA_CONFIG);

    return (
      <AntRadar
        insetLeft={insetLeft}
        insetRight={insetRight}
        area={areaConfig}
        point={pointConfig}
        axis={axisConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Radar;
