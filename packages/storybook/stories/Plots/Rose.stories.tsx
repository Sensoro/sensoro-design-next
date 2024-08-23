import React from 'react';
import { Rose, type RoseConfig } from '@sensoro-design/plots';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Plots/Rose',
};

export default meta;

export function Basic() {
  const sharedConfig = getSharedConfig<RoseConfig>();

  const config: RoseConfig = {
    ...sharedConfig,
    title: '玫瑰图',
    data: {
      type: 'fetch',
      value:
        'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json',
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year',
  };

  return <Rose {...config} />;
}
