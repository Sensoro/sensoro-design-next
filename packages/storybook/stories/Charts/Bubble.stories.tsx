import React from 'react';
import { Bubble, type BubbleConfig } from '@sensoro-design/charts';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Charts/Bubble',
};

export default meta;

export function Basic() {
  const sharedConfig = getSharedConfig<BubbleConfig>();

  const config: BubbleConfig = {
    ...sharedConfig,
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

  return <Bubble {...config} />;
}
