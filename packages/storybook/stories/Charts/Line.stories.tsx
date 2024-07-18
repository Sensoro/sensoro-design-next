import React from 'react';
import { Line, type LineConfig } from '@sensoro-design/charts';

const meta = {
  title: 'Charts/Line',
};

export default meta;

export function Basic() {
  const config: LineConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础折线图',
      subtitle: ' ',
      subtitleFontSize: 0,
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
    axis: {
      x: {
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

export function Middle() {
  const config: LineConfig = {
    // TODO: 标题底部间距无法实现
    title: {
      title: '基础折线图',
      subtitle: ' ',
      subtitleFontSize: 0,
    },
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    area: false,
    data: [
      { year: '2010', value: 510, category: 'Liquid fuel' },
      { year: '2010', value: 481, category: 'Solid fuel' },
      { year: '2010', value: 570, category: 'Gas flarinl' },
      { year: '2011', value: 513, category: 'Liquid fuel' },
      { year: '2011', value: 405, category: 'Solid fuel' },
      { year: '2011', value: 164, category: 'Gas flarinl' },
      { year: '2012', value: 320, category: 'Liquid fuel' },
      { year: '2012', value: 410, category: 'Solid fuel' },
      { year: '2012', value: 250, category: 'Gas flarinl' },
      { year: '2013', value: 222, category: 'Liquid fuel' },
      { year: '2013', value: 512, category: 'Solid fuel' },
      { year: '2013', value: 408, category: 'Gas flarinl' },
      { year: '2014', value: 428, category: 'Liquid fuel' },
      { year: '2014', value: 111, category: 'Solid fuel' },
      { year: '2014', value: 568, category: 'Gas flarinl' },
      { year: '2015', value: 428, category: 'Liquid fuel' },
      { year: '2015', value: 111, category: 'Solid fuel' },
      { year: '2015', value: 568, category: 'Gas flarinl' },
    ],
    axis: {
      x: {
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
