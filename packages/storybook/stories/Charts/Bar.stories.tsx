import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Bar, type BarConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Plots/Bar',
};

export default meta;

const data = [
  {
    name: '蓝领',
    value: 8,
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
    width: 480,
    scale: {
      y: {
        domain: [0, 1200],
      },
    },
    // TODO 以下内容需要再 charts 中实现
    paddingRight: 21,
    markBackground: { label: { dx: 317 } },
  };

  // @ts-expect-error 暂时忽略
  return <Bar {...config} renderer={new SVGRenderer()} />;
}

export function AloneTitle() {
  const config: BarConfig = {
    title: '独立标题行条形图',
    height: data.length * 8 + (data.length - 1) * 24 + 92 + 48,
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
    // TODO 以下内容需要再 charts 中实现
    paddingRight: 21,
    markBackground: { label: { dx: 427 } },
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
