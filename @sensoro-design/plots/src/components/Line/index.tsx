import React, { forwardRef } from 'react';
import { isUndefined } from '@rcuse/shared';
import AntLine from '@ant-design/plots/es/components/line';
import type { Chart } from '@ant-design/plots/es/interface';
import type { LineConfig as AntLineConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AREA_CONFIG,
  DEFAULT_AXIS_CONFIG,
  DEFAULT_POINT_CONFIG,
} from './config';

export interface LineConfig extends Omit<AntLineConfig, ''> {}

export const Line = forwardRef<Chart, LineConfig>(
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
    let areaConfig = deepMix({}, DEFAULT_AREA_CONFIG, area);

    // 多折线图默认不展示阴影
    if (props.colorField && isUndefined(props.axis)) {
      areaConfig = undefined;
    }

    return (
      <AntLine
        insetLeft={insetLeft}
        insetRight={insetRight}
        area={areaConfig}
        point={pointConfig}
        axis={axisConfig}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default Line;
