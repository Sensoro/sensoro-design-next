import type { FC } from 'react';
import React from 'react';

import type { BarConfig } from '@ant-design/plots';
import { Bar as BaseBar } from '@ant-design/plots';
import { mergeConfig } from '../utils';

export { BarConfig };

type DataConfig = BarConfig['data'];
type OtherConfig = Omit<BarConfig, 'data'>;

interface DataProps {
  data: DataConfig;
  config: OtherConfig;
}

interface ConfigProps {
  config: BarConfig;
  data?: undefined;
}

type Props = DataProps | ConfigProps;

const Bar: FC<Props> = ({ config, data }) => {
  const newConfig = mergeConfig(config, data);

  return <BaseBar {...newConfig} />;
};

export default Bar;
