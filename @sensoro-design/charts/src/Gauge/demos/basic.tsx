import type { GaugeConfig } from '@sensoro-design/charts';
import { Gauge } from '@sensoro-design/charts';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<GaugeConfig['config']>({
    percent: 0.4,
    height: 140,
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
        <Gauge
          type="basic"
          title="基础仪表盘"
          legend={{
            type: 'box',
            direction: 'alone',
            position: 'bottom',
            legendItemGap: 48,
            labels: ['已接通', '未接通'],
          }}
          config={config}
          tooltip={{ showTitle: false }}
        />
      </div>
    </div>
  );
};
