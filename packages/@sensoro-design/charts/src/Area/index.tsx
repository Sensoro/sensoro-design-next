import type { FC } from 'react';
import React from 'react';

import type { AreaConfig } from '@ant-design/plots';
import { Area as BaseArea } from '@ant-design/plots';
import { mergeConfig } from '../utils';

export { AreaConfig };

type DataConfig = AreaConfig['data'];
type OtherConfig = Omit<AreaConfig, 'data'>;

interface DataProps {
  data: DataConfig;
  config: OtherConfig;
}

interface ConfigProps {
  config: AreaConfig;
  data?: undefined;
}

type Props = DataProps | ConfigProps;

const Area: FC<Props> = ({ config, data }) => {
  const newConfig = mergeConfig(config, data);

  return <BaseArea {...newConfig} />;
};

export default Area;
