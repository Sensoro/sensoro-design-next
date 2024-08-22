import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
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
  };

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}

export function Middle() {
  const config: LineConfig = {
    title: '多条折线图',
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    legend: {
      color: {
        showTitle: true,
        title: ' ',
        itemMarker: 'hyphenPoint',
        layout: {
          justifyContent: 'flex-end',
        },
      },
    },
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
  };

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}

export function Smooth() {
  const config: LineConfig = {
    title: '曲线图',
    shapeField: 'smooth',
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
  };

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}

export function MiddleSmooth() {
  const config: LineConfig = {
    title: '多条曲线图',
    shapeField: 'smooth',
    xField: 'year',
    yField: 'value',
    colorField: 'category',
    legend: false,
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
  };

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}

export function Baseline() {
  const config: LineConfig = {
    title: '辅助线',
    shapeField: 'smooth',
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
    annotations: [
      {
        type: 'lineY',
        yField: 1800,
        style: {
          stroke: '#F72231',
        },
        label: {
          text: '报警阀值:50',
          // dx: 30,
          position: 'right',
          style: {
            strokeOpacity: 0,
            fill: '#F72231',
            fontSize: 10,
            textBaseline: 'bottom',
          },
        },
      },
    ],
  };

  // @ts-expect-error 暂时忽略
  return <Line {...config} renderer={new SVGRenderer()} />;
}
