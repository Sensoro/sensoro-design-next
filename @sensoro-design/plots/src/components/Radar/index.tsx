import React, { forwardRef } from 'react';
import { Radar as AntRadar } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { RadarConfig as AntRadarConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AREA_CONFIG,
  DEFAULT_AXIS_CONFIG,
  DEFAULT_POINT_CONFIG,
} from './config';

export interface RadarConfig extends Omit<AntRadarConfig, ''> {}

export const Radar = forwardRef<Chart, RadarConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      area,
      point,
      axis,
      ...rest
    } = props;

    const pointConfig = deepMix({}, DEFAULT_POINT_CONFIG, point);
    const axisConfig = deepMix({}, DEFAULT_AXIS_CONFIG, axis);
    const areaConfig = deepMix({}, DEFAULT_AREA_CONFIG, area);

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
