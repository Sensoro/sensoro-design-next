import type { AreaConfig as BaseAreaConfig } from '@ant-design/plots';
import { Area as BaseArea } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import type { FC } from 'react';
import React, { useMemo } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import { COLORS_SMALL } from '../style';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface AreaConfig extends BaseConfig {
  type: 'basic' | 'gradient' | 'stack' | 'smooth';
  title?: string;
  data?: BaseAreaConfig['data'];
  config?: Omit<BaseAreaConfig, 'data'> & { data?: BaseAreaConfig['data'] };
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
        point: false,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        showCrosshairs: true,
      }),
      legend: false,
    },
    gradient: {
      ...getDefaultConfig({
        point: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        showCrosshairs: true,
      }),
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)',
        };
      },
      line: {
        color: COLORS_SMALL[0],
      },
      legend: false,
    },
    // 曲线图
    smooth: {
      ...getDefaultConfig({
        point: false,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        showCrosshairs: true,
      }),
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#fff 1:rgba(43, 109, 229, 0.15)',
        };
      },
      line: {
        color: COLORS_SMALL[0],
      },
      smooth: true,
      legend: false,
    },
    // 堆叠面积图
    stack: {
      ...getDefaultConfig({
        tooltip: true,
        legend: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        customContentData,
        showCrosshairs: true,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-area';

const Area: FC<AreaConfig> = ({
  config = {},
  data,
  title,
  type,
  legend,
  timeRange,
  style = {},
  className = '',
  empty,
  customContentData,
  tooltip,
}) => {
  const { seriesField } = config;
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
  ) as BaseAreaConfig;

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
          <BaseArea {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Area;
