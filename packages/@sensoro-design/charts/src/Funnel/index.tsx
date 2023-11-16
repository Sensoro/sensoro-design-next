import type { FunnelConfig as BaseFunnelConfig } from '@ant-design/plots';
import { Funnel as BaseFunnel } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface FunnelConfig extends BaseConfig {
  type: 'basic' | 'compare' | 'series'; // 基础、分组、双向
  title?: string;
  data?: BaseFunnelConfig['data'];
  config?: Omit<BaseFunnelConfig, 'data'> & { data?: BaseFunnelConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
  legend,
  showTooltipTitle,
}: Partial<GetDefaultConfigProps>) => {
  return {
    basic: {
      ...getDefaultConfig({
        funnel: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
      }),
      columnWidthRatio: 0.4,
      legend: false,
    },
    compare: {
      ...getDefaultConfig({
        funnel: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        customContentData,
      }),
      columnWidthRatio: 0.5,
      legend: false,
    },
    series: {
      ...getDefaultConfig({
        funnel: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        customContentData,
      }),
      marginRatio: -1,
      columnWidthRatio: 0.8,
      legend: false,
    },
  };
};

const prefixCls = 'sen-column';

const Column: FC<FunnelConfig> = ({
  config,
  data,
  title,
  type,
  legend,
  timeRange,
  style = {},
  className = '',
  empty,
  tooltip,
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
    {},
    genDefaultConfig({
      colorMap,
      seriesField,
      customContentData,
      legend,
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
    })[type],
    config,
    {
      data: originalData,
    },
  ) as BaseFunnelConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={seriesField}
        legend={legend}
        colorMap={colorMap}
        timeRange={timeRange}
      >
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseFunnel {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Column;
