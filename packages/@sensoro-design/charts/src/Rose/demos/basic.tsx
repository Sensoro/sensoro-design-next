import type { RoseConfig } from '@sensoro-design/charts';
import { Rose } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    type: '分类一',
    value: 60,
  },
  {
    type: '分类二',
    value: 55,
  },
  {
    type: '分类三',
    value: 50,
  },
  {
    type: '分类四',
    value: 40,
  },
  {
    type: '分类五',
    value: 35,
  },
  {
    type: '分类六',
    value: 30,
  },
  {
    type: '分类七',
    value: 25,
  },
  {
    type: '分类八',
    value: 20,
  },
  {
    type: '分类九',
    value: 18,
  },
  {
    type: '分类十',
    value: 15,
  },
  {
    type: '分类十一',
    value: 10,
  },
  {
    type: '分类十二',
    value: 5,
  },
  {
    type: '分类十三',
    value: 5,
  },
  {
    type: '分类十四',
    value: 5,
  },
  {
    type: '分类十五',
    value: 5,
  },
];

export default () => {
  const [config, setConfig] = useState<RoseConfig['config']>({
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    width: 300,
    height: 300,
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
        <Rose title="玫瑰图" config={config} />
      </div>
    </div>
  );
};
