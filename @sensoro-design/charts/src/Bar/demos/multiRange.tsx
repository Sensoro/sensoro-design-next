import type { BarConfig } from '@sensoro-design/charts';
import { Bar } from '@sensoro-design/charts';
import dayjs from 'dayjs';
import { map } from 'lodash';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const formatTimesData = (
  data: { startTime: number; endTime: number }[],
  y: string,
) => {
  return data?.reduce?.(
    (prev: any[], current: { startTime: number; endTime: number }) => {
      prev.push({
        y,
        x: [current?.startTime, current?.endTime],
      });
      return prev;
    },
    [],
  );
};

const data = [
  // {
  //   startTime: 1715097600000,
  //   endTime: 1715098800000,
  // },
  {
    startTime: 1715099100000,
    endTime: 1715102100000,
  },
  {
    startTime: 1715107500000,
    endTime: 1715110200000,
  },
  {
    startTime: 1715113800000,
    endTime: 1715119200000,
  },
];

export default () => {
  const [config, setConfig] = useState<BarConfig['config']>({
    data: formatTimesData(data || [], '老人1').concat(
      formatTimesData(data || [], '老人2'),
    ),
    height: 84,
    padding: [24, 24, 24, 60],
    autoFit: true,
    barWidth: 12,
    minBarWidth: 12,
    maxBarWidth: 12,
    barWidthRatio: 0.55,
    xField: 'x',
    yField: 'y',
    isRange: true,
    meta: {
      y: {
        alias: '老人',
      },
      x: {
        type: 'linear',
        minLimit: 1715097600000,
        maxLimit: 1715119200000,
        tickCount: 6,
        formatter: (a) => {
          if (1715097600000 === a) {
            return dayjs(a).format('MM-DD HH:mm');
          } else {
            return dayjs(a).format('HH:mm');
          }
        },
      },
    },
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 16,
        height: 500,
      }}
    >
      <div style={{ width: '40%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Bar
          type="multiRange"
          title="在床片段分布（min）"
          config={config}
          customContentData={(data) => {
            return map(data, (item) => ({
              ...item,
              name: '在床',
            }));
          }}
          tooltip={{ showTitle: false }}
        />
      </div>
    </div>
  );
};
