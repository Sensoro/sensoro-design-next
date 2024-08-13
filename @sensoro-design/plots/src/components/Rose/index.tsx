import React, { forwardRef } from 'react';
import AntRose from '@ant-design/plots/es/components/rose';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { RoseConfig as AntRoseConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_SCALE_CONFIG,
} from './config';

export interface RoseConfig extends Omit<AntRoseConfig, ''> {
  innerRadius?: number;
}

export const Rose = forwardRef<Chart, RoseConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      axis = false,
      scale,
      innerRadius,
      height,
      ...rest
    } = props;

    const scaleConfig = deepMix({}, DEFAULT_SCALE_CONFIG, scale);
    const radiusConfig = innerRadius ?? 8 / (height || 320);

    return (
      <AntRose
        height={height}
        insetLeft={insetLeft}
        insetRight={insetRight}
        scale={scaleConfig}
        axis={axis}
        innerRadius={radiusConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Rose;
