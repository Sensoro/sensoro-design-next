import type { BarConfig as BaseBarConfig } from '@ant-design/plots';
import { Bar as BaseBar } from '@ant-design/plots';
import { map, merge } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { CustomBar, type CustomBarProps } from './CustomBar';
import './index.less';

export interface BarConfig extends BaseConfig {
  title?: string;
  type?: 'basic' | 'alone' | 'range' | 'multiRange'; // 正常、单独行、区间条形图、多行区间条形图
  data?: CustomBarProps['data'];
  config: Omit<BaseBarConfig, 'data'> & { data?: CustomBarProps['data'] };
}

const genDefaultConfig = ({
  showTooltipTitle,
  customContentData,
}: Partial<GetDefaultConfigProps>) => {
  return {
    basic: {},
    alone: {},
    range: {
      ...getDefaultConfig({
        rangebar: true,
        tooltip: true,
        tooltipBox: true,
        showTooltipTitle,
        customContentData,
      }),
      legend: false,
    },
    multiRange: {
      ...getDefaultConfig({
        rangebar: true,
        multiRange: true,
        tooltip: true,
        tooltipBox: true,
        showTooltipTitle,
        customContentData,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-bar';

const Bar: FC<BarConfig> = ({
  config,
  data,
  title,
  type = 'basic',
  timeRange,
  empty,
  style = {},
  className = '',
  tooltip,
  customContentData,
}) => {
  const { yField = 'label', xField = 'value' } = config || {};

  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({
        ...item,
        label: item[yField],
        value: item[xField],
        __index__: idx,
      })),
    [data, config?.data],
  );

  const newConfig = merge(
    {},
    genDefaultConfig({
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
      customContentData,
    })[type],
    config,
    {
      data: originalData,
    },
  ) as BaseBarConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite title={title} legend={false} timeRange={timeRange}>
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : ['basic', 'alone'].includes(type) ? (
          <CustomBar type={type as 'basic' | 'alone'} data={originalData} />
        ) : (
          <BaseBar {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Bar;
