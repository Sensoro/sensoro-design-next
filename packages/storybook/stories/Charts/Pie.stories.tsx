import React from 'react';
import { Pie, type PieConfig } from '@sensoro-design/charts';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Charts/Pie',
};

export default meta;

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

export function Basic() {
  const sharedConfig = getSharedConfig<PieConfig>();

  const config: PieConfig = {
    ...sharedConfig,
    title: '饼图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0,
  };

  return <Pie {...config} />;
}

export function Ring() {
  const sharedConfig = getSharedConfig<PieConfig>();

  const config: PieConfig = {
    ...sharedConfig,
    title: '环图',
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    statisticCount: 232,
    statisticText: 'AntV',
  };

  return <Pie {...config} />;
}

export function ZeroRing() {
  const sharedConfig = getSharedConfig<PieConfig>();

  const config: PieConfig = {
    ...sharedConfig,
    title: '无数据环图',
    data: zeroData,
    angleField: 'value',
    colorField: 'type',
    statisticCount: 0,
    statisticText: 'AntV',
  };

  return <Pie {...config} />;
}
