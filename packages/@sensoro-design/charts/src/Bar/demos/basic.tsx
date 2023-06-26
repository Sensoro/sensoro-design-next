import type { BarConfig } from '@sensoro-design/charts';
import { Bar } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    year: '1951 年',
    value: 38,
  },
  {
    year: '1952 年',
    value: 52,
  },
  {
    year: '1956 年',
    value: 61,
  },
  {
    year: '1957 年',
    value: 145,
  },
  {
    year: '1958 年',
    value: 48,
  },
];

export default () => {
  const [config, setConfig] = useState<BarConfig>({
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left',
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
      <div style={{ width: '50%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '50%' }}>
        <Bar config={config} />
      </div>
    </div>
  );
};
