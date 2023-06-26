import type { FC } from 'react';
import React from 'react';

import type { PieConfig } from '@ant-design/plots';
import { Pie as BasePie } from '@ant-design/plots';
import { mergeConfig } from '../utils';

export { PieConfig };

type DataConfig = PieConfig['data'];
type OtherConfig = Omit<PieConfig, 'data'>;

interface DataProps {
  data: DataConfig;
  config: OtherConfig;
}

interface ConfigProps {
  config: PieConfig;
  data?: undefined;
}

type Props = DataProps | ConfigProps;

const Pie: FC<Props> = ({ config, data }) => {
  const newConfig = mergeConfig(config, data);

  return <BasePie {...newConfig} />;
};

export default Pie;
