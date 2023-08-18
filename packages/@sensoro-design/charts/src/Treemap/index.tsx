import type { BaseConfig as AntVBaseConfig } from '@ant-design/plots';
import { Treemap as BaseTreemap } from '@ant-design/plots';
import { merge } from 'lodash';
import type { FC } from 'react';
import React from 'react';
import Composite from '../components/Composite';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';

interface Child {
  [key: string]: any;
}
interface Data {
  name: string;
  children: Child[];
}

type BaseTreemapConfig = Omit<AntVBaseConfig<any>, 'tooltip'>;

const defaultConfig = {
  ...getDefaultConfig({ tooltipBox: true, treemap: true }),
  legend: false,
};

export interface TreemapConfig extends BaseTreemapConfig, BaseConfig {
  title?: string;
  data?: Data;
  config?: Omit<BaseTreemapConfig, 'data'> & {
    data?: Data;
  };
}

const prefixCls = 'sen-pie';

const Treemap: FC<TreemapConfig> = ({
  title,
  config = {},
  data,
  style = {},
  className = '',
}) => {
  const newConfig = merge(defaultConfig, config, { data });

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite title={title}>
        <BaseTreemap {...newConfig} />
      </Composite>
    </div>
  );
};

export default Treemap;
