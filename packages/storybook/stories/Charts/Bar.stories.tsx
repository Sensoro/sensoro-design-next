import React from 'react';
import { Bar, type BarConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Bar',
};

const data = [
  {
    name: '蓝领',
    value: 10,
  },
  {
    name: '白领',
    value: 220,
  },
  {
    name: '制造业蓝领阿卡丽地方改哦施工图啊饿哦i让他跟你说',
    value: 320,
  },
  {
    name: '退休人员',
    value: 440,
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
    scale: {
      y: {
        domain: [0, 800],
      },
    },
  };

  return <Bar {...config} />;
}

export function AloneTitle() {
  const config: BarConfig = {
    title: '独立标题行条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    scale: {
      y: {
        domain: [0, 800],
      },
    },
    axis: {
      x: {
        size: 0,
        label: false,
      },
    },
    label: {
      text: 'name',
      position: 'left',
      transform: [{ type: 'overlapDodgeY' }],
      dy: -18,
      lineHeight: 20,
    },
  };

  return <Bar {...config} />;
}
