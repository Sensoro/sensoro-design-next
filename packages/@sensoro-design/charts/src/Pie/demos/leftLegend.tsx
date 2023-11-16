import type { PieConfig } from '@sensoro-design/charts';
import { Pie } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    type: '分类一 27',
    value: 27,
  },
  {
    type: '分类二 25',
    value: 25,
  },
  {
    type: '分类三 18',
    value: 18,
  },
  {
    type: '分类四 15',
    value: 15,
  },
  {
    type: '分类五 10',
    value: 10,
  },
];

export default () => {
  const [config, setConfig] = useState<PieConfig['config']>({
    data,
    angleField: 'value',
    colorField: 'type',
    width: 128,
    height: 128,
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
          title="饼图"
          type="pie"
          config={config}
          style={{ width: 284 }}
          legend={{
            direction: 'left',
            legendItemGap: 16,
            textStyle: { color: 'blue' },
          }}
          className="left"
        />
      </div>
    </div>
  );
};
