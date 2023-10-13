import type { PieConfig as BasePieConfig } from '@ant-design/plots';
import { Pie as BasePie } from '@ant-design/plots';
import { classNames } from '@pansy/shared';
import { every, groupBy, map, merge, transform } from 'lodash';
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
  data?: BasePieConfig['data'] & { value: number };
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
        tooltipBox: true,
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
        tooltipBox: true,
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

  // 环图如果所有数据都为空，展示一个完整的不换色的环： #F6F7F8;
  const isRingZero = useMemo(() => {
    // @ts-ignore
    return type === 'ring' && every(originalData, (data) => !data.value);
  }, [originalData]);

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

  const newData = isRingZero ? newConfig.data.slice(0, 1) : newConfig.data;
  let tootip = newConfig.tooltip;

  if (isRingZero) {
    // @ts-ignore
    newConfig.theme = {
      colors10: Array.from(Array(10), () => '#F6F7F8'),
    };
    tootip = false;
  }

  return (
    <div className={classNames(`${prefixCls}`, `${className}`)} style={style}>
      <Composite
        title={title}
        seriesField={colorField}
        legend={{ direction: 'vertical', type: 'box' }}
        colorMap={colorMap}
        timeRange={timeRange}
      >
        <BasePie
          {...newConfig}
          data={newData}
          tooltip={tootip}
          interactions={isRingZero ? [] : [{ type: 'element-active' }]}
        />
      </Composite>
    </div>
  );
};

export default Pie;
