import React, { forwardRef } from 'react';
import { Gauge as AntGauge } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { GaugeConfig as AntGaugeConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { DEFAULT_AXIS_CONFIG, DEFAULT_SCALE_CONFIG, DEFAULT_STYLE_CONFIG } from './config';
import type { AxisConfig, ScaleConfig, StyleConfig } from './types';

export interface GaugeConfig extends Omit<AntGaugeConfig, 'axis' | 'scale'> {
  axis?: AntGaugeConfig['axis'] | boolean;
  scale?: AntGaugeConfig['scale'] | boolean;
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
      axis = true,
      scale = true,
      ...rest
    } = props;

    // 需要给data的name赋值为空字符串，否则会显示默认值 scale
    const dataConfig = Object.assign({}, data, { name: '' });
    const axisConfig = getItemConfig<AxisConfig>(axis, DEFAULT_AXIS_CONFIG);
    const scaleConfig = getItemConfig<ScaleConfig>(scale, DEFAULT_SCALE_CONFIG);
    const styleConfig = getItemConfig<StyleConfig>(scale, DEFAULT_STYLE_CONFIG);

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
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Gauge;
