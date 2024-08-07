import React from 'react';
import { Gauge, type GaugeConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Charts/Gauge',
};

export default meta;

export function Basic() {
  const config: GaugeConfig = {
    title: '仪表盘',
    // data 格式为 { target: number, total: number } | { percent: number }
    // percent 优先级更高，会覆盖 target 和 total
    data: {
      target: 120,
      total: 400,
      percent: 0.6,
    },
    width: 720,
  };

  return (
    <Gauge {...config} />
  );
}
