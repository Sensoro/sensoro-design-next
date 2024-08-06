import React, { forwardRef } from 'react';
import { Rose as AntRose } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { RoseConfig as AntRoseConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import {
  DEFAULT_SCALE_CONFIG,
} from './config';
import type { ScaleConfig } from './types';

export interface RoseConfig extends Omit<AntRoseConfig, 'scale' | 'axis'> {
  scale?: AntRoseConfig['scale'] | boolean;
  axis?: AntRoseConfig['axis'] | boolean;
}

export const Rose = forwardRef<Chart, RoseConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      scale = true,
      axis = false,
      ...rest
    } = props;

    const scaleConfig = getItemConfig<ScaleConfig>(scale, DEFAULT_SCALE_CONFIG);

    return (
      <AntRose
        insetLeft={insetLeft}
        insetRight={insetRight}
        scale={scaleConfig}
        axis={axis}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Rose;
