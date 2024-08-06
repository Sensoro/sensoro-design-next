import React from 'react';
import { Rose, type RoseConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Rose',
};

export default meta;

export function Basic() {
  const config: RoseConfig = {
    title: '玫瑰图',
    data: {
      type: 'fetch',
      value:
        'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json',
    },
    xField: 'year',
    yField: 'people',
    colorField: 'year',
    axis: false,
  };

  return (
    <Rose {...config} />
  );
}
