import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Pie, type PieConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Pie',
};

const data = [
  { type: '分类一', value: 27 },
  { type: '分类二', value: 25 },
  { type: '分类三', value: 18 },
  { type: '分类四', value: 15 },
  { type: '分类五', value: 10 },
  { type: '其他', value: 5 },
];

const zeroData = [
  { type: '分类一', value: 0 },
  { type: '分类二', value: 0 },
  { type: '分类三', value: 0 },
  { type: '分类四', value: 0 },
  { type: '分类五', value: 0 },
  { type: '其他', value: 0 },
];

export default meta;

export function Basic() {
  const config: PieConfig = {
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0,
  };

  return <Pie {...config} />;
}

export function Ring() {
  const config: PieConfig = {
    title: '环图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    statisticCount: 232,
    statisticText: 'AntV',
  };

  // @ts-expect-error 暂时忽略
  return <Pie {...config} renderer={new SVGRenderer()} />;
}

export function ZeroRing() {
  const config: PieConfig = {
    title: '无数据环图',
    data: zeroData,
    angleField: 'value',
    colorField: 'type',
    statisticCount: 0,
    statisticText: 'AntV',
  };

  // @ts-expect-error 暂时忽略
  return <Pie {...config} renderer={new SVGRenderer()} />;
}
