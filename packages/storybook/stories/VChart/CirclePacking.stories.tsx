import React from 'react';
import { CirclePacking, type CirclePackingProps } from '@sensoro-design/vchart';

const meta = {
  title: 'VChart/CirclePacking',
};

export default meta;

export function Basic() {
  const config: CirclePackingProps = {
    data: {
      values: [
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
    },
    categoryField: 'name',
    valueField: 'value',
  };

  return <CirclePacking {...config} />;
}
