import React from 'react';
import type { Meta } from '@storybook/react';
import { Line } from '@sensoro-design/charts';

const meta = {
  title: 'Charts/Line',
  component: Line,
  argTypes: {},
  args: { },
} satisfies Meta<typeof Line>;

export default meta;

export function Basic() {
  const config = {
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    data: [
      { Date: '2010-01', scales: 0 },
      { Date: '2010-02', scales: 2 },
      { Date: '2010-03', scales: 0 },
      { Date: '2010-04', scales: 0 },
      { Date: '2010-05', scales: 10 },
      { Date: '2010-06', scales: 0 },
      { Date: '2010-07', scales: 0 },
      { Date: '2010-08', scales: 0 },
      { Date: '2010-09', scales: 0 },
      { Date: '2010-10', scales: 0 },
      { Date: '2010-11', scales: 0 },
      { Date: '2010-12', scales: 0 },
    ],
  };
  return (
    <Line
      {...config}
      theme={{
        type: 'sDark',
      }}
    />
  );
}
