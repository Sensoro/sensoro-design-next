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
];

export default () => {
  const [config, setConfig] = useState<RoseConfig['config']>({
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    width: 204,
    height: 204,
    // sectorStyle: (item) => {
    //   return {
    //     r: 66,
    //     fill: 'red',
    //     fillOpacity: 0.5,
    //     stroke: 'black',
    //     lineWidth: 1,
    //     lineDash: [4, 5],
    //     strokeOpacity: 0.7,
    //   };
    // },
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
        <Rose title="玫瑰图" config={config} legend={{ lineGap: 48 }} />
      </div>
    </div>
  );
};
