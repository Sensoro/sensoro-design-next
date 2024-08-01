import React from 'react';
import { interpolateHcl } from 'd3-interpolate';
import { CirclePacking } from '@ant-design/plots';

const meta = {
  title: 'Charts/CirclePacking',
};

export default meta;

export function Basic() {
  const config = {
    title: '基础捆绑图',
    data: {
      type: 'fetch',
      value: 'https://assets.antv.antgroup.com/g2/flare.json',
    },
    valueField: 'value',
    colorField: 'depth',
    scale: {
      color: {
        domain: [0, 5],
        range: ['hsl(152,80%,80%)', 'hsl(228,30%,40%)'],
        interpolate: interpolateHcl,
      },
    },
  };

  return (
    <CirclePacking {...config} />
  );
}

export function Basic1() {
  const config = {
    title: '基础捆绑图1',
    data: {
      value: {
        // name: 'flare',
        children: [
          {
            name: 'a',
            value: 4,
          },
          {
            name: 'b',
            value: 6,
          },
          {
            name: 'c',
            value: 10,
          },
        ],
      },
    },
    layout: {
      padding: 10,
    },
    valueField: 'value',
    colorField: 'depth',
    // scale: {
    //   color: {
    //     range: ['transparent', 'red', 'green', 'blue'],
    //   },
    // },
    style: {
      labelText: (d: any) => {
        return d.depth === 1 ? `${d.data.name}` : '';
      },
      labelFontSize: 30,
    },
  };

  return (
    <CirclePacking {...config} />
  );
}
