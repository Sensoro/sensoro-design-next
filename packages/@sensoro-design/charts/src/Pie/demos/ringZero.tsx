import type { PieConfig } from '@sensoro-design/charts';
import { Pie } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    type: '分类一',
    value: 0,
  },
  {
    type: '分类二',
    value: 0,
  },
  {
    type: '分类三',
    value: 0,
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
        content: '0',
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
          title="环图(值为0)"
          type="ring"
          config={config}
          legend
          style={{ width: 384 }}
          className="ringZero"
        />
      </div>
    </div>
  );
};
