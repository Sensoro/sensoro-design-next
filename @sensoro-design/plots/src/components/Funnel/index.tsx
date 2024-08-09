import React, { forwardRef } from 'react';
import { Funnel as AntFunnel } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { deepMix } from '@antv/util';
import type { FunnelConfig as AntFunnelConfig } from '@ant-design/plots';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { DEFAULT_STYLE_CONFIG } from './config';

export interface FunnelConfig extends Omit<AntFunnelConfig, ''> {}

export const Funnel = forwardRef<Chart, FunnelConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      label = false,
      style,
      ...rest
    } = props;

    const styleConfig = deepMix({}, DEFAULT_STYLE_CONFIG, style);

    return (
      <AntFunnel
        insetLeft={insetLeft}
        insetRight={insetRight}
        label={label}
        style={styleConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Funnel;
