import React, { forwardRef } from 'react';
import { Pie as AntPie } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { PieConfig as AntPieConfig } from '@ant-design/plots';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { DEFAULT_INSET_LEFT, DEFAULT_INSET_RIGHT } from '../../config';
import { getAnnotations } from './utils';

export type PieConfig = {
  statisticCount?: number | string;
  statisticText?: string;
} & AntPieConfig;

export const Pie = forwardRef<Chart, PieConfig>(
  (props, ref) => {
    const {
      insetLeft = DEFAULT_INSET_LEFT,
      insetRight = DEFAULT_INSET_RIGHT,
      innerRadius = 0.6,
      statisticCount,
      statisticText,
      annotations,
      ...rest
    } = props;

    const annotationsConfig = innerRadius === 0 ? undefined : annotations || statisticCount && statisticText && getAnnotations(statisticCount!, statisticText!);

    return (
      <AntPie
        insetLeft={insetLeft}
        insetRight={insetRight}
        innerRadius={innerRadius}
        annotations={annotationsConfig}
        {...rest}
        ref={ref}
        renderer={new SVGRenderer()}
      />
    );
  },
);

export default Pie;
