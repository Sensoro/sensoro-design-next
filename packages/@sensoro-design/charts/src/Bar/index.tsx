import type { BarConfig as BaseBarConfig } from '@ant-design/plots';
import { map, merge } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { BaseConfig } from '../types';
import { CustomBar, type CustomBarProps } from './CustomBar';
import './index.less';

export interface BarConfig extends BaseConfig {
  title?: string;
  type?: 'basic' | 'alone';
  data?: CustomBarProps['data'];
  config: Omit<BaseBarConfig, 'data'> & { data?: CustomBarProps['data'] };
}

const prefixCls = 'sen-bar';

const Bar: FC<BarConfig> = ({
  config,
  data,
  title,
  type = 'basic',
  // legend,
  timeRange,
  empty,
  style = {},
  className = '',
  // tooltip,
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

  const newConfig = merge({}, config, {
    data: originalData,
  }) as BaseBarConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite title={title} legend={false} timeRange={timeRange}>
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <CustomBar type={type} data={newConfig.data} />
        )}
      </Composite>
    </div>
  );
};

export default Bar;
