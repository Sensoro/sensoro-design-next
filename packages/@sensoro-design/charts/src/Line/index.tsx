import React from 'react';
import { Line as AntLine } from '@ant-design/plots';
import type { LineConfig as AntLineConfig } from '@ant-design/plots';
import { getItemConfig } from '../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../config';
import { DEFAULT_AREA_CONFIG, DEFAULT_POINT_CONFIG } from './config';
import type { AreaConfig, PointConfig } from './types';

export interface LineConfig extends Omit<AntLineConfig, 'area' | 'point'> {
  area?: AntLineConfig['area'] | boolean;
  point?: AntLineConfig['point'] | boolean;
}

export function Line(props: LineConfig) {
  const {
    insetLeft = DEFAULT_INSET_LEFT,
    insetRight = DEFAULT_INSET_RIGHT,
    area = true,
    point = true,
    ...rest
  } = props;

  const areaConfig = getItemConfig<AreaConfig>(area, DEFAULT_AREA_CONFIG);
  const pointConfig = getItemConfig<PointConfig>(point, DEFAULT_POINT_CONFIG);

  return (
    <AntLine
      insetLeft={insetLeft}
      insetRight={insetRight}
      area={areaConfig}
      point={pointConfig}
      {...rest}
    />
  );
}
