import React, { forwardRef } from 'react';
import { Column as AntColumn } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { ColumnConfig as AntColumnConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';
import type { AxisConfig, StyleConfig } from './types';

export interface ColumnConfig extends Omit<AntColumnConfig, 'axis' | 'style'> {
  axis?: AntColumnConfig['axis'] | boolean;
  style?: AntColumnConfig['axis'] | boolean;
}

export const Column = forwardRef<Chart, ColumnConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      axis = true,
      style = true,
      ...rest
    } = props;

    const styleConfig = getItemConfig<StyleConfig>(style, DEFAULT_STYLE_CONFIG);
    const axisConfig = getItemConfig<AxisConfig>(axis, DEFAULT_AXIS_CONFIG);

    // TODO: 柱状图占比，背景宽度
    return (
      <AntColumn
        insetLeft={insetLeft}
        insetRight={insetRight}
        axis={axisConfig}
        style={styleConfig}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default Column;
