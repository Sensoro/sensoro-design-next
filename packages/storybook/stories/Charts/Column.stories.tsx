import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Column, type ColumnConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Column',
};

const data = [
  {
    name: 'London',
    月份: 'Jan.',
    月均降雨量: 18.9,
  },
  {
    name: 'London',
    月份: 'Feb.',
    月均降雨量: 28.8,
  },
  {
    name: 'London',
    月份: 'Mar.',
    月均降雨量: 39.3,
  },
  {
    name: 'London',
    月份: 'Apr.',
    月均降雨量: 81.4,
  },
  {
    name: 'London',
    月份: 'May',
    月均降雨量: 47,
  },
  {
    name: 'London',
    月份: 'Jun.',
    月均降雨量: 20.3,
  },
  {
    name: 'London',
    月份: 'Jul.',
    月均降雨量: 24,
  },
  {
    name: 'London',
    月份: 'Aug.',
    月均降雨量: 35.6,
  },
  {
    name: 'Berlining',
    月份: 'Jan.',
    月均降雨量: -12.4,
  },
  {
    name: 'Berlining',
    月份: 'Feb.',
    月均降雨量: -23.2,
  },
  {
    name: 'Berlining',
    月份: 'Mar.',
    月均降雨量: -34.5,
  },
  {
    name: 'Berlining',
    月份: 'Apr.',
    月均降雨量: -99.7,
  },
  {
    name: 'Berlining',
    月份: 'May',
    月均降雨量: -52.6,
  },
  {
    name: 'Berlining',
    月份: 'Jun.',
    月均降雨量: -35.5,
  },
  {
    name: 'Berlining',
    月份: 'Jul.',
    月均降雨量: -37.4,
  },
  {
    name: 'Berlining',
    月份: 'Aug.',
    月均降雨量: -42.4,
  },
];

export default meta;

export function Basic() {
  const config: ColumnConfig = {
    title: '基础柱状图',
    data: [
      { letter: 'A', frequency: 67 },
      { letter: 'B', frequency: 92 },
      { letter: 'C', frequency: 82 },
      { letter: 'D', frequency: 53 },
      { letter: 'E', frequency: 12 },
      { letter: 'F', frequency: 88 },
      { letter: 'G', frequency: 15 },
      { letter: 'H', frequency: 94 },
      { letter: 'I', frequency: 66 },
      { letter: 'J', frequency: 53 },
    ],
    xField: 'letter',
    yField: 'frequency',
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}

export function Group() {
  const config: ColumnConfig = {
    title: '分组柱状图',
    data: {
      type: 'fetch',
      value:
        'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
    },
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true,
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}

export function BothwayGroup() {
  const config: ColumnConfig = {
    title: '双向柱状图',
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
  };

  // @ts-expect-error 暂时忽略
  return <Column {...config} renderer={new SVGRenderer()} />;
}
