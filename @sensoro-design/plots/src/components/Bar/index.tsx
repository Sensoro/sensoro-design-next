import React, { forwardRef } from 'react';
import AntBar from '@ant-design/plots/es/components/bar';
import type { Chart } from '@ant-design/plots/es/interface';
import type { BarConfig as AntBarConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_INTERACTION_CONFIG,
  DEFAULT_SCALE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';
import { getDefaultMarkBackgroundConfig } from './utils';

export interface BarConfig extends Omit<AntBarConfig, ''> {}

export const Bar = forwardRef<Chart, BarConfig>((props, ref) => {
  const {
    axis,
    style,
    scale,
    interaction,
    markBackground,
    paddingRight = 0, // TODO 需要再charts中抹平 paddingRight 和数据值的位数关系:最大值的长度 * 3
    // @ts-expect-error 暂时忽略
    ...rest
  } = props;

  const styleConfig = deepMix({}, DEFAULT_STYLE_CONFIG, style);
  const axisConfig = deepMix({}, DEFAULT_AXIS_CONFIG, axis);
  const markBackgroundConfig = deepMix(
    {},
    getDefaultMarkBackgroundConfig(rest.yField as string),
    markBackground,
  );
  const interactionConfig = deepMix(
    {},
    DEFAULT_INTERACTION_CONFIG,
    interaction,
  );
  const scaleConfig = deepMix({}, DEFAULT_SCALE_CONFIG, scale);

  return (
    <AntBar
      paddingRight={paddingRight}
      axis={axisConfig}
      style={styleConfig}
      markBackground={markBackgroundConfig}
      interaction={interactionConfig}
      scale={scaleConfig}
      {...rest}
      ref={ref}
    />
  );
});

export default Bar;
