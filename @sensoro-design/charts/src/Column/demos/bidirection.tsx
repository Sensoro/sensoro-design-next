import type { ColumnConfig } from '@sensoro-design/charts';
import { Column } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    name: 'London',
    月份: 'Jan.',
    月均降雨量: 18.9,
  },
  {
    name: 'London',
    月份: 'Feb.',
    月均降雨量: 28.8,
  },
  {
    name: 'London',
    月份: 'Mar.',
    月均降雨量: 39.3,
  },
  {
    name: 'London',
    月份: 'Apr.',
    月均降雨量: 81.4,
  },
  {
    name: 'London',
    月份: 'May',
    月均降雨量: 47,
  },
  {
    name: 'London',
    月份: 'Jun.',
    月均降雨量: 20.3,
  },
  {
    name: 'London',
    月份: 'Jul.',
    月均降雨量: 24,
  },
  {
    name: 'London',
    月份: 'Aug.',
    月均降雨量: 35.6,
  },
  {
    name: 'Berlining',
    月份: 'Jan.',
    月均降雨量: -12.4,
  },
  {
    name: 'Berlining',
    月份: 'Feb.',
    月均降雨量: -23.2,
  },
  {
    name: 'Berlining',
    月份: 'Mar.',
    月均降雨量: -34.5,
  },
  {
    name: 'Berlining',
    月份: 'Apr.',
    月均降雨量: -99.7,
  },
  {
    name: 'Berlining',
    月份: 'May',
    月均降雨量: -52.6,
  },
  {
    name: 'Berlining',
    月份: 'Jun.',
    月均降雨量: -35.5,
  },
  {
    name: 'Berlining',
    月份: 'Jul.',
    月均降雨量: -37.4,
  },
  {
    name: 'Berlining',
    月份: 'Aug.',
    月均降雨量: -42.4,
  },
];

export default () => {
  const [config, setConfig] = useState<ColumnConfig['config']>({
    data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
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
        <Column
          title="双向柱状图"
          type="bidirection"
          legend={{ type: 'box' }}
          config={config}
        />
      </div>
    </div>
  );
};
