import React from 'react';
import { Bar, type BarConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Bar',
};

const data = [
  {
    name: '蓝领',
    value: 1100,
  },
  {
    name: '白领',
    value: 2200,
  },
  {
    name: '制造业蓝领哈久啊禄口街道发了卡萨丁激发',
    value: 330,
  },
  {
    name: '退休人员',
    value: 400,
  },
];

export default meta;

export function Basic() {
  const config: BarConfig = {
    title: '基础条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92,
    data,
    xField: 'name',
    yField: 'value',
    paddingRight: -110,
    scale: {
      y: {
        domain: [0, 2200],
      },
    },
  };

  return <Bar {...config} />;
}
