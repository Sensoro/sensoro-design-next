import React, { forwardRef } from 'react';
import AntColumn from '@ant-design/plots/es/components/column';
import type { Chart } from '@ant-design/plots/es/interface';
import type { ColumnConfig as AntColumnConfig } from '@ant-design/plots';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_INTERACTION_CONFIG,
  DEFAULT_SCALE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';

export interface ColumnConfig extends Omit<AntColumnConfig, ''> {}

export const Column = forwardRef<Chart, ColumnConfig>((props, ref) => {
  const {
    insetLeft = DEFAULT_INSET_LEFT,
    insetRight = DEFAULT_INSET_RIGHT,
    axis,
    scale,
    style,
    interaction,
    ...rest
  } = props;

  const styleConfig = deepMix({}, DEFAULT_STYLE_CONFIG, style);
  const axisConfig = deepMix({}, DEFAULT_AXIS_CONFIG, {});
  const scaleConfig = deepMix({}, DEFAULT_SCALE_CONFIG, scale);
  const interactionConfig = deepMix(
    {},
    DEFAULT_INTERACTION_CONFIG,
    interaction,
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
});

export default Column;
