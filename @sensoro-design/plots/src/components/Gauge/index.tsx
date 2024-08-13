import React, { forwardRef } from 'react';
import AntGauge from '@ant-design/plots/es/components/gauge';
import type { Chart } from '@ant-design/plots/es/interface';
import type { GaugeConfig as AntGaugeConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { getScaleConfig } from './utils';
import { DEFAULT_AXIS_CONFIG, DEFAULT_STYLE_CONFIG } from './config';

export interface GaugeConfig extends Omit<AntGaugeConfig, ''> {
  startAngle?: number;
  endAngle?: number;
}

export const Gauge = forwardRef<Chart, GaugeConfig>(
  (props, ref) => {
    const {
      data,
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      startAngle = -1.25 * Math.PI,
      endAngle = 0.25 * Math.PI,
      axis,
      scale,
      style,
      ...rest
    } = props;

    // 需要给data的name赋值为空字符串，否则会显示默认值 scale
    const dataConfig = deepMix({}, data, { name: '' }, {});
    const axisConfig = deepMix({}, DEFAULT_AXIS_CONFIG, axis);
    const scaleConfig = deepMix(
      {},
      getScaleConfig(data.target === 0 || data.percent === 0),
      scale,
    );
    const styleConfig = deepMix({}, DEFAULT_STYLE_CONFIG, style);

    return (
      <AntGauge
        insetLeft={insetLeft}
        insetRight={insetRight}
        startAngle={startAngle}
        endAngle={endAngle}
        data={dataConfig}
        axis={axisConfig}
        scale={scaleConfig}
        style={styleConfig}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default Gauge;
