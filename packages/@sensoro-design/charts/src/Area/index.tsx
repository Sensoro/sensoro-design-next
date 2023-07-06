import type { FC } from 'react';
import React, { useMemo } from 'react';

import type { AreaConfig as BaseAreaConfig } from '@ant-design/plots';
import { Area as BaseArea } from '@ant-design/plots';
import { COLORS_SMALL } from '@sensoro-design/charts/style';
import { map, merge } from 'lodash';
import { getDefaultConfig } from '../config/base';

import Title from '../components/Title';

export interface AreaConfig {
  type: 'basic' | 'gradient' | 'stack' | 'smooth';
  title?: string;
  data?: BaseAreaConfig['data'];
  config?: Omit<BaseAreaConfig, 'data'> & { data?: BaseAreaConfig['data'] };
}

const defaultConfig: Record<AreaConfig['type'], AreaConfig['config']> = {
  basic: {},
  gradient: {
    ...getDefaultConfig({ point: true, tooltip: true }),
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)',
      };
    },
    line: {
      color: COLORS_SMALL[0],
    },
  },
  smooth: {
    ...getDefaultConfig({ point: false, tooltip: true }),
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)',
      };
    },
    line: {
      color: COLORS_SMALL[0],
    },
  },
  stack: {},
};

const Area: FC<AreaConfig> = ({ config, data, title, type }) => {
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );
  const newConfig = merge(defaultConfig[type], config, {
    data: originalData,
  }) as BaseAreaConfig;

  return (
    <div>
      <Title text={title} />
      <BaseArea {...newConfig} />
    </div>
  );
};

export default Area;
