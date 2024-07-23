import React, { forwardRef } from 'react';
import { Area as AntArea } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { AreaConfig as AntAreaConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_INTERACTION_CONFIG,
  DEFAULT_Line_CONFIG,
} from './config';
import type { AxisConfig, InteractionConfig, LineConfig } from './types';

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
      interaction = true,
      ...rest
    } = props;

    const lineConfig = getItemConfig<LineConfig>(line, DEFAULT_Line_CONFIG);
    const axisConfig = getItemConfig<AxisConfig>(axis, DEFAULT_AXIS_CONFIG);
    const interactionConfig = getItemConfig<InteractionConfig>(interaction, DEFAULT_INTERACTION_CONFIG);

    return (
      <AntArea
        insetLeft={insetLeft}
        insetRight={insetRight}
        axis={axisConfig}
        style={{
          fillOpacity: 0.2,
        }}
        line={lineConfig}
        interaction={interactionConfig}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default Area;
