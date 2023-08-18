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
  {
    type: '分类三',
    value: 18,
  },
  {
    type: '分类四',
    value: 15,
  },
  {
    type: '分类五',
    value: 10,
  },
];

export default () => {
  const [config, setConfig] = useState<PieConfig['config']>({
    data,
    angleField: 'value',
    colorField: 'type',
    // radius: 0.9,
    // label: undefined,
    // label: {
    //   type: 'inner',
    //   offset: '-30%',
    //   content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
    //   style: {
    //     fontSize: 14,
    //     textAlign: 'center',
    //   },
    // },
    // interactions: [
    //   {
    //     type: 'element-active',
    //   },
    // ],
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
        <Pie title="饼图" type="pie" config={config} />
      </div>
    </div>
  );
};
