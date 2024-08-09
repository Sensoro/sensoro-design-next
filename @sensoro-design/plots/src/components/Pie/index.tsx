import React, { forwardRef } from 'react';
import { Pie as AntPie } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { PieConfig as AntPieConfig } from '@ant-design/plots';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { deepMix } from '@antv/util';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { DEFAULT_ZERO_STYLE_CONFIG } from './config';
import { getAnnotations } from './utils';

export interface PieConfig extends Omit<AntPieConfig, ''> {
  statisticCount?: number | string;
  statisticText?: string;
};

export const Pie = forwardRef<Chart, PieConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      innerRadius = 0.6,
      style = true,
      statisticCount,
      statisticText,
      annotations,
      ...rest
    } = props;

    const annotationsConfig = innerRadius === 0 ? undefined : annotations || statisticCount && statisticText && getAnnotations(statisticCount!, statisticText!);
    const styleConfig = deepMix(
      {},
      statisticCount === 0 ? DEFAULT_ZERO_STYLE_CONFIG : {},
      style,
    );

    return (
      <AntPie
        insetLeft={insetLeft}
        insetRight={insetRight}
        innerRadius={innerRadius}
        annotations={annotationsConfig}
        style={styleConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Pie;
