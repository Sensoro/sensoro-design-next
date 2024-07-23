import React from 'react';
import { Area, type AreaConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Area',
};

export default meta;

export function Basic() {
  const config: AreaConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础面积图',
    },
    data: {
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/bmw-prod/e58c9758-0a09-4527-aa90-fbf175b45925.json',
    },
    xField: (d: any) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry',
  };

  return (
    <Area {...config} />
  );
}

export function Stack() {
  const config: AreaConfig = {
    title: {
      title: '堆叠面积图',
    },
    data: {
      type: 'fetch',
      value:
        'https://assets.antv.antgroup.com/g2/unemployment-by-industry.json',
    },
    xField: (d: any) => new Date(d.date),
    yField: 'unemployed',
    colorField: 'industry',
    stack: true,
  };

  return (
    <Area {...config} />
  );
}
