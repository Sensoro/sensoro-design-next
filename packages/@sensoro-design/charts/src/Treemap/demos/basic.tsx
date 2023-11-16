import type { TreemapConfig } from '@sensoro-design/charts';
import { Treemap } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = {
  name: 'root',
  children: [
    {
      name: '冷杉',
      value: 154010263,
    },
    {
      name: '云杉',
      value: 147739000,
    },
    {
      name: '落叶松',
      value: 3430,
    },
    {
      name: '红松',
      value: 292706754,
    },
    {
      name: '樟子松',
      value: 305178345,
    },
    {
      name: '赤松',
      value: 377170774,
    },
    {
      name: '其它灌木(其它灌木树种)',
      value: 416292188,
    },
  ],
};

export default () => {
  const [config, setConfig] = useState<TreemapConfig['config']>({
    data,
    colorField: 'name',
    tooltip: {
      formatter: (v: any) => {
        const root = v.path[v.path.length - 1];
        return {
          name: v.name,
          value: `${v.value}(总占比${((v.value / root.value) * 100).toFixed(
            2,
          )}%)`,
        };
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
      <div style={{ width: '50%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '50%' }}>
        <Treemap key="11" title="矩形树图" config={config} />
      </div>
    </div>
  );
};
