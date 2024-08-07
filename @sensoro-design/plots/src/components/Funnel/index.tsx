import React, { forwardRef } from 'react';
import { Funnel as AntFunnel } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import type { FunnelConfig as AntFunnelConfig } from '@ant-design/plots';
import { getItemConfig } from '../../helpers/utils';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { DEFAULT_STYLE_CONFIG } from './config';
import type { StyleConfig } from './types';

export interface FunnelConfig extends Omit<AntFunnelConfig, 'style'> {
  style?: AntFunnelConfig['style'] | boolean;
}

export const Funnel = forwardRef<Chart, FunnelConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      label = false,
      style = true,
      ...rest
    } = props;

    const styleConfig = getItemConfig<StyleConfig>(style, DEFAULT_STYLE_CONFIG);

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
