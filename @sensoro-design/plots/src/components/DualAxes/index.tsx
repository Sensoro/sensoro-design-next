import React, { forwardRef } from 'react';
import AntDualAxes from '@ant-design/plots/es/components/dual-axes';
import type { Chart } from '@ant-design/plots/es/interface';
import type { DualAxesConfig as AntDualAxesConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_SCALE_CONFIG,
  DEFAULT_STYLE_CONFIG,
} from './config';

export interface DualAxesConfig extends Omit<AntDualAxesConfig, ''> {}

export const DualAxes = forwardRef<Chart, DualAxesConfig>((props, ref) => {
  const {
    insetLeft = DEFAULT_INSET_LEFT,
    insetRight = DEFAULT_INSET_RIGHT,
    scale,
    style,
    ...rest
  } = props;

  const styleConfig = deepMix({}, DEFAULT_STYLE_CONFIG, style);
  const scaleConfig = deepMix({}, DEFAULT_SCALE_CONFIG, scale);

  return (
    <AntDualAxes
      insetLeft={insetLeft}
      insetRight={insetRight}
      scale={scaleConfig}
      style={styleConfig}
      {...rest}
      ref={ref}
    />
  );
});

export default DualAxes;
