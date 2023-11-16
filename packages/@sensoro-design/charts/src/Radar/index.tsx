import type { RadarConfig as BaseRadarConfig } from '@ant-design/plots';
import { Radar as BaseRadar } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

export interface RadarConfig extends BaseConfig {
  title?: string;
  data?: BaseRadarConfig['data'];
  config?: Omit<BaseRadarConfig, 'data'> & { data?: BaseRadarConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
  showTooltipTitle,
}: Partial<GetDefaultConfigProps>) => {
  return {
    ...getDefaultConfig({
      radar: true,
      tooltipBox: true,
      showTooltipTitle,
      colorMap,
      seriesField,
      customContentData,
    }),
    legend: false,
  };
};

const prefixCls = 'sen-radar';

const Radar: FC<RadarConfig> = ({
  config,
  data,
  title,
  legend,
  timeRange,
  style = {},
  className = '',
  customContentData,
  empty,
  tooltip,
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
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
    }),
    config,
    {
      data: originalData,
    },
  ) as BaseRadarConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={seriesField}
        legend={
          legend === false ? false : { direction: 'vertical', verticalGap: 56 }
        }
        colorMap={colorMap}
        timeRange={timeRange}
      >
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseRadar {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Radar;
