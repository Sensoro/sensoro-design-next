import React, { forwardRef } from 'react';
import { CirclePacking as AntCirclePacking } from '@ant-design/plots';
import type { Chart } from '@ant-design/plots/es/interface';
import type { CirclePackingConfig as AntCirclePackingConfig } from '@ant-design/plots';

export interface CirclePackingConfig extends Omit<AntCirclePackingConfig, ''> {}

export const CirclePacking = forwardRef<Chart, CirclePackingConfig>(
  (props, ref) => {
    return (
      <AntCirclePacking
        {...props}
        ref={ref}
      />
    );
  },
);

export default CirclePacking;
