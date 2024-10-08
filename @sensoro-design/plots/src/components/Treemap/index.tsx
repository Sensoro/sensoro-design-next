import React, { forwardRef } from 'react';
import AntTreemap from '@ant-design/plots/es/components/treemap';
import type { Chart } from '@ant-design/plots/es/interface';
import type { TreemapConfig as AntTreemapConfig } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { DEFAULT_SCALE_CONFIG } from './config';

export interface TreemapConfig extends Omit<AntTreemapConfig, ''> {
  valueField?: string;
}

export const Treemap = forwardRef<Chart, TreemapConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      scale,
      ...rest
    } = props;

    const scaleConfig = deepMix({}, DEFAULT_SCALE_CONFIG, scale);

    return (
      <AntTreemap
        insetLeft={insetLeft}
        insetRight={insetRight}
        scale={scaleConfig}
        {...rest}
        ref={ref}
      />
    );
  },
);

export default Treemap;
