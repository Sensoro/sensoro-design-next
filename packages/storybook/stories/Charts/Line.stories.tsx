import React from 'react';
import { Line, type LineConfig } from '@sensoro-design/charts';

const meta = {
  title: 'Charts/Line',
};

export default meta;

export function Basic() {
  const config: LineConfig = {
    padding: 'auto',
    title: {
      title: '基础折线图',
      subtitle: '我是副标题',
    },
    xField: 'time',
    yField: 'scales',
    data: [
      { time: '2010-01', scales: 1998 },
      { time: '2010-02', scales: 1850 },
      { time: '2010-03', scales: 1720 },
      { time: '2010-04', scales: 1818 },
      { time: '2010-05', scales: 1920 },
      { time: '2010-06', scales: 1802 },
      { time: '2010-07', scales: 1945 },
      { time: '2010-08', scales: 1856 },
      { time: '2010-09', scales: 2107 },
      { time: '2010-10', scales: 2140 },
    ],
    area: {
      style: {
        opacity: 0.15,
        fill: 'linear-gradient(-90deg, white 0%, rgba(43,109,229,.15) 100%)',
      },
      tooltip: false,
    },
    point: {
      size: 2,
      shape: 'circle',
      style: {
        fill: 'white',
        lineWidth: 1,
      },
      tooltip: false,
    },
    style: {
      lineWidth: 2,
    },
    axis: {
      x: {
        // Line
        line: true,
      },
    },
    interaction: {
      tooltip: {
        crosshairs: true,
        crosshairsStroke: '#82b6ff',
        crosshairsLineDash: [3, 2],
      },
    },
  };
  return (
    <Line {...config} />
  );
}
