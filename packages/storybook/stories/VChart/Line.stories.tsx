import React from 'react';
import { Line, type LineProps } from '@sensoro-design/vchart';

const meta = {
  title: 'VChart/Line',
};

export default meta;

export function Middle() {
  const config: LineProps = {
    title: {
      visible: true,
      text: '多条折线图',
    },
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    data: {
      values: [
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
    },
    legends: {
      visible: true,
      position: 'end',
      orient: 'top',
    },
    point: {
      style: {
        fill: 'white',
        shape: 'circle',
        strokeWidth: 1,
        stroke: {
          scale: 'color',
          field: 'category',
        },
      },
    },
  };

  return <Line {...config} />;
}
