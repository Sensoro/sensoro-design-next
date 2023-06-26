import type { FC } from 'react';
import React from 'react';

import type { ColumnConfig } from '@ant-design/plots';
import { Column as BaseColumn } from '@ant-design/plots';
import { mergeConfig } from '../utils';

export { ColumnConfig };

type DataConfig = ColumnConfig['data'];
type OtherConfig = Omit<ColumnConfig, 'data'>;

interface DataProps {
  data: DataConfig;
  config: OtherConfig;
}

interface ConfigProps {
  config: ColumnConfig;
  data?: undefined;
}

type Props = DataProps | ConfigProps;

const Column: FC<Props> = ({ config, data }) => {
  const newConfig = mergeConfig(config, data);

  return <BaseColumn {...newConfig} />;
};

export default Column;
