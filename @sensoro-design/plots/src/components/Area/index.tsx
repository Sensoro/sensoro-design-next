import React, { forwardRef } from 'react';
import { Area as AntArea } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { deepMix } from '@antv/util';
import type { AreaConfig as AntAreaConfig } from '@ant-design/plots';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_AXIS_CONFIG,
  DEFAULT_LINE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';

export interface AreaConfig extends Omit<AntAreaConfig, ''> {}

export const Area = forwardRef<Chart, Partial<AreaConfig>>((props, ref) => {
  const {
    insetLeft = DEFAULT_INSET_LEFT,
    insetRight = DEFAULT_INSET_RIGHT,
    line,
    axis,
    style,
    ...rest
  } = props;

  const lineConfig = deepMix({}, DEFAULT_LINE_CONFIG, line);
  const axisConfig = deepMix({}, DEFAULT_AXIS_CONFIG, axis);
  const styleConfig = deepMix({}, DEFAULT_STYLE_CONFIG, style);

  return (
    <AntArea
      insetLeft={insetLeft}
      insetRight={insetRight}
      axis={axisConfig}
      line={lineConfig}
      style={styleConfig}
      {...rest}
      ref={ref}
      renderer={new SVGRenderer()}
    />
  );
});

export default Area;
