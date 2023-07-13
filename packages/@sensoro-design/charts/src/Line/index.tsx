import type { FC } from 'react';
import React, { useMemo } from 'react';

import type { LineConfig as BaseLineConfig } from '@ant-design/plots';
import { Line as BaseLine } from '@ant-design/plots';
import Legend from '@sensoro-design/charts/components/Legend';
import Title from '@sensoro-design/charts/components/Title';
import { getDefaultConfig } from '@sensoro-design/charts/config/base';
import { COLORS_SMALL } from '@sensoro-design/charts/style';
import { groupBy, isBoolean, merge, transform } from 'lodash';
import type { GetDefaultConfigProps } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';

import './index.less';

export interface LineConfig extends BaseConfig {
  type: 'multiple';
  data?: BaseLineConfig['data'];
  config?: Omit<BaseLineConfig, 'data'> & { data?: BaseLineConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
}: Partial<GetDefaultConfigProps>) => {
  return {
    multiple: {
      ...getDefaultConfig({
        point: false,
        tooltip: true,
        colorMap,
        seriesField,
        customContentData,
      }),
      color: (data: Record<string, string>) => {
        if (seriesField) {
          return colorMap?.[data[seriesField]];
        }
        return COLORS_SMALL[0];
      },
      legend: false,
    },
  };
};

const prefixCls = 'sen-line';

const Line: FC<LineConfig> = ({
  config = {},
  type,
  data,
  title,
  legend,
  customContentData,
}) => {
  const { seriesField } = config;
  const originalData = useMemo(
    () => data ?? config?.data,
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

  const newConfig = useMemo(
    () =>
      merge(
        genDefaultConfig({
          colorMap,
          seriesField,
          customContentData,
        })[type],
        config,
        {
          data: originalData,
        },
      ) as BaseLineConfig,
    [colorMap, seriesField],
  );

  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}-header`}>
        <Title text={title} />
        {seriesField && legend && (
          <Legend legend={isBoolean(legend) ? {} : legend} colors={colorMap} />
        )}
      </div>
      <BaseLine {...newConfig} />
    </div>
  );
};

export default Line;
