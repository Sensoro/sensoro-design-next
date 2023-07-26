import type { PieConfig as BasePieConfig } from '@ant-design/plots';
import { Pie as BasePie } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface PieConfig extends BaseConfig {
  type: 'pie' | 'ring'; // 基础、分组、双向
  title?: string;
  data?: BasePieConfig['data'];
  config?: Omit<BasePieConfig, 'data'> & { data?: BasePieConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  colorField,
  customContentData,
}: Partial<GetDefaultConfigProps>) => {
  return {
    pie: {
      ...getDefaultConfig({
        pie: true,
        colorMap,
        colorField,
        customContentData,
      }),
      legend: false,
    },
    ring: {
      ...getDefaultConfig({
        pie: true,
        ring: true,
        colorMap,
        colorField,
        customContentData,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-pie';

const Pie: FC<PieConfig> = ({
  config,
  data,
  title,
  type,
  timeRange,
  style = {},
  className = '',
  customContentData,
}) => {
  const { colorField } = config ?? {};
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );

  const legendMap = useMemo(
    () => (colorField ? groupBy(originalData, colorField) : {}),
    [colorField, originalData],
  );

  const colorMap = useMemo(() => {
    const data = transform(
      legendMap,
      (result: Record<string, ''>, value, key) => {
        result[key] = '';
        return result;
      },
      {},
    );
    return generateColorMap(data);
  }, [legendMap]);

  const newConfig = merge(
    genDefaultConfig({
      colorMap,
      colorField,
      customContentData,
    })[type],
    config,
    {
      data: originalData,
    },
  ) as BasePieConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={colorField}
        legend={{ direction: 'vertical', type: 'box' }}
        colorMap={colorMap}
        timeRange={timeRange}
      >
        <BasePie {...newConfig} />
      </Composite>
    </div>
  );
};

export default Pie;
