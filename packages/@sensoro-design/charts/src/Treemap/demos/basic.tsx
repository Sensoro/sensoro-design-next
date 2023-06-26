import type { TreemapConfig } from '@sensoro-design/charts';
import { Treemap } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = {
  name: 'root',
  children: [
    {
      name: '分类 1',
      value: 560,
    },
    {
      name: '分类 2',
      value: 500,
    },
    {
      name: '分类 3',
      value: 150,
    },
    {
      name: '分类 4',
      value: 140,
    },
    {
      name: '分类 5',
      value: 115,
    },
    {
      name: '分类 6',
      value: 95,
    },
    {
      name: '分类 7',
      value: 90,
    },
    {
      name: '分类 8',
      value: 75,
    },
    {
      name: '分类 9',
      value: 98,
    },
    {
      name: '分类 10',
      value: 60,
    },
    {
      name: '分类 11',
      value: 45,
    },
    {
      name: '分类 12',
      value: 40,
    },
    {
      name: '分类 13',
      value: 40,
    },
    {
      name: '分类 14',
      value: 35,
    },
    {
      name: '分类 15',
      value: 40,
    },
    {
      name: '分类 16',
      value: 40,
    },
    {
      name: '分类 17',
      value: 40,
    },
    {
      name: '分类 18',
      value: 30,
    },
    {
      name: '分类 19',
      value: 28,
    },
    {
      name: '分类 20',
      value: 16,
    },
  ],
};

export default () => {
  const [config, setConfig] = useState<TreemapConfig>({
    data,
    colorField: 'name',
    legend: {
      position: 'top-left',
    },
    tooltip: {
      formatter: (v) => {
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
        <Treemap config={config} />
      </div>
    </div>
  );
};
