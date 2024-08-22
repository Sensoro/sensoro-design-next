import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Bubble, type BubbleConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Plots/Bubble',
};

export default meta;

export function Basic() {
  const config: BubbleConfig = {
    layout: {
      padding: 10,
    },
    width: 400,
    height: 300,
    data: [
      {
        name: '上海',
        value: 4,
      },
      {
        name: '深圳',
        value: 6,
      },
      {
        name: '北京',
        value: 10,
      },
    ],
  };

  // @ts-expect-error 暂时忽略
  return <Bubble {...config} renderer={new SVGRenderer()} />;
}
