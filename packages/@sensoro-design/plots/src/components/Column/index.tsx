import React, { forwardRef } from 'react';
import { Column as AntColumn } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { ColumnConfig as AntColumnConfig } from '@ant-design/plots';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_INTERACTION_CONFIG,
  DEFAULT_SCALE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';
import type {
  AxisConfig,
  InteractionConfig,
  ScaleConfig,
  StyleConfig,
} from './types';

export interface ColumnConfig
  extends Omit<AntColumnConfig, 'interaction' | 'scale' | 'axis' | 'style'> {
  axis?: AntColumnConfig['axis'] | boolean;
  scale?: AntColumnConfig['scale'] | boolean;
  style?: AntColumnConfig['axis'] | boolean;
  interaction?: AntColumnConfig['interaction'] | boolean;
}

export const Column = forwardRef<Chart, ColumnConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      axis = true,
      scale = true,
      style = true,
      interaction = true,
      ...rest
    } = props;

    const styleConfig = getItemConfig<StyleConfig>(style, DEFAULT_STYLE_CONFIG);
    const axisConfig = getItemConfig<AxisConfig>(axis, DEFAULT_AXIS_CONFIG);
    const scaleConfig = getItemConfig<ScaleConfig>(scale, DEFAULT_SCALE_CONFIG);
    const interactionConfig = getItemConfig<InteractionConfig>(
      interaction,
      DEFAULT_INTERACTION_CONFIG,
    );

    // TODO: 柱状图占比，背景宽度
    return (
      <AntColumn
        insetLeft={insetLeft}
        insetRight={insetRight}
        axis={axisConfig}
        scale={scaleConfig}
        style={styleConfig}
        interaction={interactionConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Column;
