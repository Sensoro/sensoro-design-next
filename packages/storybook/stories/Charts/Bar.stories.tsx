import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Bar, type BarConfig } from '@sensoro-design/charts';

const meta = {
  title: 'Charts/Bar',
};

export default meta;

const data = [
  {
    name: '蓝领',
    value: 108,
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

export function Basic() {
  const config: BarConfig = {
    title: '基础条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    // 需要传入宽度
    width: 480, // 480 - 48 - 110 - 16,
    scale: {
      y: {
        domain: [0, 1200],
      },
    },
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}

export function AloneTitle() {
  const config: BarConfig = {
    title: '独立标题行条形图',
    height: data.length * 8 + (data.length - 1) * 36 + 92 + 48,
    data,
    xField: 'name',
    yField: 'value',
    // 需要传入宽度
    width: 480,
    scale: {
      y: {
        domain: [0, 1200],
      },
    },
    aloneLabel: true,
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}
