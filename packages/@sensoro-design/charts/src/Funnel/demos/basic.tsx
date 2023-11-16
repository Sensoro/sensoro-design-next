import type { FunnelConfig } from '@sensoro-design/charts';
import { Funnel } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

const data = [
  {
    stage: '简历筛选',
    number: 253,
  },
  {
    stage: '初试人数',
    number: 151,
  },
  {
    stage: '复试人数',
    number: 113,
  },
  {
    stage: '录取人数',
    number: 87,
  },
  {
    stage: '入职人数',
    number: 59,
  },
];

export default () => {
  const [config, setConfig] = useState<FunnelConfig['config']>({
    data,
    xField: 'stage',
    yField: 'number',
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
        <Funnel
          type="basic"
          title="基础漏斗图"
          legend={{ type: 'box', direction: 'alone', position: 'bottom' }}
          config={config}
          tooltip={{ showTitle: false }}
        />
      </div>
    </div>
  );
};
