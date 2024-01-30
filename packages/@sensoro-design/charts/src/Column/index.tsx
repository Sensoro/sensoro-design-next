import type { ColumnConfig as BaseColumnConfig } from '@ant-design/plots';
import { Column as BaseColumn } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface ColumnConfig extends BaseConfig {
  type: 'basic' | 'group' | 'bidirection'; // 基础、分组、双向
  title?: string;
  data?: BaseColumnConfig['data'];
  config?: Omit<BaseColumnConfig, 'data'> & { data?: BaseColumnConfig['data'] };
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
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
      }),
      columnWidthRatio: 0.4,
      legend: false,
    },
    group: {
      ...getDefaultConfig({
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        customContentData,
      }),
      intervalPadding: 2,
      columnWidthRatio: 0.5,
      legend: false,
    },
    bidirection: {
      ...getDefaultConfig({
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

const Column: FC<ColumnConfig> = ({
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
  ) as BaseColumnConfig;

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
          <BaseColumn {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Column;
