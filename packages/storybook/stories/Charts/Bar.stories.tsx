import React from 'react';
import { Bar, type BarConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Bar',
};

const data = [
  {
    labelName: '蓝领',
    value: 110,
  },
  {
    labelName: '白领',
    value: 220,
  },
  {
    labelName: '制造业蓝领哈久啊禄口街道发了卡萨丁激发',
    value: 330,
  },
  {
    labelName: '退休人员',
    value: 400,
  },
];

export default meta;

export function Basic() {
  const config: BarConfig = {
    title: '基础条形图',
    data,
    xField: 'labelName',
    yField: 'value',
  };

  return <Bar {...config} />;
}
