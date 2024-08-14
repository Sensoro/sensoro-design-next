import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Gauge, type GaugeConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Plots/Gauge',
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

  // @ts-expect-error 暂时忽略
  return <Gauge {...config} renderer={new SVGRenderer()} />;
}

export function ZeroGauge() {
  const config: GaugeConfig = {
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

  // @ts-expect-error 暂时忽略
  return <Gauge {...config} renderer={new SVGRenderer()} />;
}
