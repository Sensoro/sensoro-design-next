import React, { forwardRef } from 'react';
import { Treemap as AntTreemap } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { TreemapConfig as AntTreemapConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { DEFAULT_SCALE_CONFIG } from './config';
import type { ScaleConfig } from './types';

export interface TreemapConfig extends Omit<AntTreemapConfig, 'scale'> {
  scale?: AntTreemapConfig['scale'] | boolean;
}

export const Treemap = forwardRef<Chart, TreemapConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      scale = true,
      ...rest
    } = props;

    const scaleConfig = getItemConfig<ScaleConfig>(scale, DEFAULT_SCALE_CONFIG);

    return (
      <AntTreemap
        insetLeft={insetLeft}
        insetRight={insetRight}
        scale={scaleConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Treemap;
