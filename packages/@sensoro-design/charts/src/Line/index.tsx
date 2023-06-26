import type { FC } from 'react';
import React from 'react';

import type { LineConfig } from '@ant-design/plots';
import { Line as BaseLine } from '@ant-design/plots';
import { mergeConfig } from '../utils';

export { LineConfig };

type DataConfig = LineConfig['data'];
type OtherConfig = Omit<LineConfig, 'data'>;

interface DataProps {
  data: DataConfig;
  config: OtherConfig;
}

interface ConfigProps {
  config: LineConfig;
  data?: undefined;
}

type Props = DataProps | ConfigProps;

const Line: FC<Props> = ({ config, data }) => {
  const newConfig = mergeConfig(config, data);

  return <BaseLine {...newConfig} />;
};

export default Line;
