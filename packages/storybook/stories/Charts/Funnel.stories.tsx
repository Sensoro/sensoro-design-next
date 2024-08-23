import React from 'react';
import { Funnel, type FunnelConfig } from '@sensoro-design/charts';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Charts/Funnel',
};

export default meta;

const data = [
  { stage: '简历筛选', number: 253 },
  { stage: '初试人数', number: 151 },
  { stage: '复试人数', number: 113 },
  { stage: '录取人数', number: 87 },
  { stage: '入职人数', number: 59 },
];

export function Basic() {
  const sharedConfig = getSharedConfig<FunnelConfig>();

  const config: FunnelConfig = {
    ...sharedConfig,
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500,
  };

  return <Funnel {...config} />;
}
