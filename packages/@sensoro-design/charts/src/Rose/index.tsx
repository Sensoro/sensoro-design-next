import type { RoseConfig as BaseRoseConfig } from '@ant-design/plots';
import { Rose as BaseRose } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface RoseConfig extends BaseConfig {
  title?: string;
  data?: BaseRoseConfig['data'];
  config?: Omit<BaseRoseConfig, 'data'> & { data?: BaseRoseConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
}: Partial<GetDefaultConfigProps>) => {
  return {
    ...getDefaultConfig({
      rose: true,
      tooltipBox: true,
      colorMap,
      seriesField,
      customContentData,
    }),
    legend: false,
  };
};

const prefixCls = 'sen-rose';

const Rose: FC<RoseConfig> = ({
  config,
  data,
  title,
  timeRange,
  style = {},
  className = '',
  customContentData,
}) => {
  const { seriesField } = config ?? {};
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );

  const legendMap = useMemo(
    () => (seriesField ? groupBy(originalData, seriesField) : {}),
    [seriesField, originalData],
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
      seriesField,
      customContentData,
    }),
    config,
    {
      data: originalData,
    },
  ) as BaseRoseConfig;

  console.log(
    '%c 🚀🚀🚀 newConfig：：',
    'font-size:20px;background: #33A5FF;color:#fff;',
    newConfig,
  );

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={seriesField}
        legend={{ direction: 'vertical', type: 'box' }}
        colorMap={colorMap}
        timeRange={timeRange}
      >
        <BaseRose {...newConfig} />
      </Composite>
    </div>
  );
};

export default Rose;
