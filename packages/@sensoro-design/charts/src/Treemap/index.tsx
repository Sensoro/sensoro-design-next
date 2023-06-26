import type { BaseConfig } from '@ant-design/plots';
import { Treemap as BaseTreemap } from '@ant-design/plots';
import type { FC } from 'react';
import React from 'react';
import { mergeConfig } from '../utils';

export interface TreemapConfig extends BaseConfig<any>, Record<string, any> {
  data: {
    name: string;
    children: any[];
  };
}

// export { TreemapConfig };

type DataConfig = TreemapConfig['data'];
type OtherConfig = Omit<TreemapConfig, 'data'>;

interface DataProps {
  data: DataConfig;
  config: OtherConfig;
}

interface ConfigProps {
  config: TreemapConfig;
  data?: undefined;
}

type Props = DataProps | ConfigProps;

const Treemap: FC<Props> = ({ config, data }) => {
  const newConfig = mergeConfig(config, data);

  return <BaseTreemap {...newConfig} />;
};

export default Treemap;
