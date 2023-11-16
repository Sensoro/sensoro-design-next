import type { PieConfig } from '@sensoro-design/charts';
import { Pie } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    type: '分类一',
    value: 27,
  },
  {
    type: '分类二',
    value: 25,
  },
];

export default () => {
  const [config, setConfig] = useState<PieConfig['config']>({
    data,
    angleField: 'value',
    colorField: 'type',

    statistic: {
      title: { content: 'title' },
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '100',
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
        <Pie
          title="环图"
          type="ring"
          config={config}
          legend={{ legendItemGap: 16, verticalGap: 40 }}
          customsColors={['red', 'orange', 'pink', 'blue']}
          style={{ width: 384 }}
          className="ring2"
        />
      </div>
    </div>
  );
};
