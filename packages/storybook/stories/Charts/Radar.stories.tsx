import React from 'react';
import { Radar, type RadarConfig } from '@sensoro-design/plots';

const data = [
  { item: 'Design', type: 'a', score: 70 },
  { item: 'Design', type: 'b', score: 30 },
  { item: 'Development', type: 'a', score: 60 },
  { item: 'Development', type: 'b', score: 70 },
  { item: 'Marketing', type: 'a', score: 50 },
  { item: 'Marketing', type: 'b', score: 60 },
  { item: 'Users', type: 'a', score: 40 },
  { item: 'Users', type: 'b', score: 50 },
  { item: 'Test', type: 'a', score: 60 },
  { item: 'Test', type: 'b', score: 70 },
  { item: 'Language', type: 'a', score: 70 },
  { item: 'Language', type: 'b', score: 50 },
  { item: 'Technology', type: 'a', score: 50 },
  { item: 'Technology', type: 'b', score: 40 },
  { item: 'Support', type: 'a', score: 30 },
  { item: 'Support', type: 'b', score: 40 },
  { item: 'Sales', type: 'a', score: 60 },
  { item: 'Sales', type: 'b', score: 40 },
  { item: 'UX', type: 'a', score: 50 },
  { item: 'UX', type: 'b', score: 60 },
];

const meta = {
  title: 'Charts/Radar',
};

export default meta;

export function Basic() {
  const config: RadarConfig = {
    title: '雷达图',
    data,
    xField: 'item',
    yField: 'score',
    colorField: 'type',
    scale: {
      y: { domainMax: 80 },
    },
    // TODO: radar坐标系问题处理
    // coordinateType: 'radar',
  };

  return (
    <Radar {...config} />
  );
}
