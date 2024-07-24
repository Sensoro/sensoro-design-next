import React, { forwardRef } from 'react';
import { Area as AntArea } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { AreaConfig as AntAreaConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_LINE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';
import type { AxisConfig, LineConfig, StyleConfig } from './types';

export interface AreaConfig
  extends Omit<AntAreaConfig, 'line' | 'axis' | 'interaction'> {
  line?: AntAreaConfig['line'] | boolean;
  axis?: AntAreaConfig['axis'] | boolean;
  interaction?: AntAreaConfig['interaction'] | boolean;
}

export const Area = forwardRef<Chart, AreaConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      line = true,
      axis = true,
      style,
      ...rest
    } = props;

    const styleConfig = getItemConfig<StyleConfig>(style, DEFAULT_STYLE_CONFIG);
    const lineConfig = getItemConfig<LineConfig>(line, DEFAULT_LINE_CONFIG);
    const axisConfig = getItemConfig<AxisConfig>(axis, DEFAULT_AXIS_CONFIG);

    return (
      <AntArea
        insetLeft={insetLeft}
        insetRight={insetRight}
        axis={axisConfig}
        line={lineConfig}
        style={styleConfig}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default Area;
