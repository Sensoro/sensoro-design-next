import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Funnel, type FunnelConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Plots/Funnel',
};

export default meta;

const data = [
  { stage: '简历筛选', number: 253 },
  { stage: '初试人数', number: 151 },
  { stage: '复试人数', number: 113 },
  { stage: '录取人数', number: 87 },
  { stage: '入职人数', number: 59 },
];

export function Basic() {
  const config: FunnelConfig = {
    title: '漏斗图',
    data,
    xField: 'stage',
    yField: 'number',
    width: 500,
  };

  // @ts-expect-error 暂时忽略
  return <Funnel {...config} renderer={new SVGRenderer()} />;
}
