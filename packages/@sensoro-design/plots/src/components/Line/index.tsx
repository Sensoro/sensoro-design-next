import React, { forwardRef } from 'react';
import { isUndefined } from '@rcuse/shared';
import { Line as AntLine } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { LineConfig as AntLineConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AREA_CONFIG,
  DEFAULT_AXIS_CONFIG,
  DEFAULT_POINT_CONFIG,
} from './config';
import type { AreaConfig, PointConfig } from './types';

export interface LineConfig extends Omit<AntLineConfig, 'area' | 'point' | 'axis' | 'interaction'> {
  area?: AntLineConfig['area'] | boolean;
  point?: AntLineConfig['point'] | boolean;
  axis?: AntLineConfig['axis'] | boolean;
}

export const Line = forwardRef<Chart, LineConfig>(
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
    let areaConfig = getItemConfig<AreaConfig>(area, DEFAULT_AREA_CONFIG);

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
