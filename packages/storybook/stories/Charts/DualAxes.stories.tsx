import React from 'react';
import { DualAxes, type DualAxesConfig } from '@sensoro-design/charts';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Charts/DualAxes',
};

export default meta;

const data = [
  { time: '2019-03', value: 350, count: 800 },
  { time: '2019-04', value: 900, count: 600 },
  { time: '2019-05', value: 300, count: 400 },
  { time: '2019-06', value: 450, count: 380 },
  { time: '2019-07', value: 470, count: 220 },
];

export function Basic() {
  const sharedConfig = getSharedConfig<DualAxesConfig>();

  const config: DualAxesConfig = {
    ...sharedConfig,
    title: '双轴图',
    data,
    xField: 'time',
    legend: true,
    scale: {
      y: {
        zero: true,
      },
    },
    children: [
      {
        type: 'interval',
        yField: 'value',
        style: { maxWidth: 80 },
      },
      {
        type: 'line',
        yField: 'count',
        style: { lineWidth: 2 },
        axis: { y: { position: 'right' } },
        area: {
          axis: {
            y: false,
          },
          style: {
            fill: 'l(270) 0:#ffffff 1:#5AD8A6',
            fillOpacity: 0.3,
          },
        },
        point: {
          style: {
            r: 4,
            fill: '#fff',
            stroke: '#5AD8A6',
            lineWidth: 2,
          },
        },
      },
    ],
  };

  return <DualAxes {...config} />;
}
