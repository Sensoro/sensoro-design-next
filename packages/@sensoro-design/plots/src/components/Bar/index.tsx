import React, { forwardRef } from 'react';
import { Bar as AntBar } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { BarConfig as AntBarConfig } from '@ant-design/plots';
import { Renderer as SVGRenderer } from "@antv/g-svg";
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_INTERACTION_CONFIG,
  DEFAULT_SCALE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';
import { getDefaultMarkBackgroundConfig } from './utils';
import type { AxisConfig, InteractionConfig, MarkBackgroundConfig, ScaleConfig, StyleConfig } from './types';

export interface BarConfig
  extends Omit<
    AntBarConfig,
    'axis' | 'style' | 'scale' | 'markBackground' | 'interaction'
  > {
  axis?: AntBarConfig['axis'] | boolean;
  style?: AntBarConfig['style'] | boolean;
  scale?: AntBarConfig['scale'] | boolean;
  markBackground?: AntBarConfig['markBackground'] | boolean;
  interaction?: AntBarConfig['interaction'] | boolean;
}

export const Bar = forwardRef<Chart, BarConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      axis = true,
      style = true,
      scale = true,
      interaction = true,
      markBackground = true,
      ...rest
    } = props;

    const styleConfig = getItemConfig<StyleConfig>(style, DEFAULT_STYLE_CONFIG);
    const axisConfig = getItemConfig<AxisConfig>(axis, DEFAULT_AXIS_CONFIG);
    const markBackgroundConfig = getItemConfig<MarkBackgroundConfig>(
      markBackground,
      getDefaultMarkBackgroundConfig(rest.yField as string),
    );
    const interactionConfig = getItemConfig<InteractionConfig>(
      interaction,
      DEFAULT_INTERACTION_CONFIG,
    );
    const scaleConfig = getItemConfig<ScaleConfig>(scale, DEFAULT_SCALE_CONFIG);

    // TODO: 条形图占比（图间距）
    return (
      <AntBar
        insetLeft={insetLeft}
        insetRight={insetRight}
        axis={axisConfig}
        style={styleConfig}
        markBackground={markBackgroundConfig}
        interaction={interactionConfig}
        scale={scaleConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Bar;
