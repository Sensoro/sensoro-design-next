import React from 'react';
import { Gauge, type GaugeConfig } from '@sensoro-design/charts';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Charts/Gauge',
};

export default meta;

export function Basic() {
  const sharedConfig = getSharedConfig<GaugeConfig>();

  const config: GaugeConfig = {
    ...sharedConfig,
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

  return <Gauge {...config} />;
}

export function ZeroGauge() {
  const sharedConfig = getSharedConfig<GaugeConfig>();

  const config: GaugeConfig = {
    ...sharedConfig,
    title: '无数据仪表盘',
    // data 格式为 { target: number, total: number } | { percent: number }
    // 如果比例为 0 时，只传入percent: 0会导致没有圆环，此时需要传入target和total的方式
    // 建议所有数据都是用 target 和 total 的方式传入
    data: {
      target: 0,
      total: 400,
      percent: 0,
    },
    width: 720,
  };

  return <Gauge {...config} />;
}
