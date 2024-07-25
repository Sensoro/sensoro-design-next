import React from 'react';
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

export default meta;

export function Basic() {
  const config: PieConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '饼图',
    },
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0,
    axis: {
      x: {
        grid: true,
        gridLineWidth: 4,
        gridStroke: 'red',
      },
      y: {
        grid: true,
        gridLineWidth: 4,
        gridStroke: 'red',
      },
    },
    style: {
      // inset: 1,
    },
  };

  return <Pie {...config} />;
}

export function Ring() {
  const config: PieConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '环图',
    },
    data,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    statisticCount: 232,
    statisticText: 'AntV',
    annotations: [
      {
        type: 'text',
        style: {
          text: '111',
          x: '50%',
          y: '50%',
          dy: -10,
          textAlign: 'center',
          fontSize: 24,
          lineHeight: 24,
          fontFamily: 'DINAlternate-Bold',
          fontStyle: 'bold',
          fill: '#0A1B39',
        },
      },
      {
        type: 'text',
        style: {
          text: 'Charts',
          x: '50%',
          y: '50%',
          dy: 10,
          textAlign: 'center',
          fontSize: 12,
          lineHeight: 12,
          fontStyle: 'bold',
          fill: 'rgba(10,27,57,0.35)',
        },
      },
    ],
    axis: {
      x: {
        grid: true,
        gridLineWidth: 4,
        gridStroke: 'red',
      },
      y: {
        grid: true,
        gridLineWidth: 4,
        gridStroke: 'red',
      },
    },
    style: {
      // inset: 1,
    },
  };

  return <Pie {...config} />;
}
