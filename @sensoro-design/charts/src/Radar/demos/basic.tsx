import type { RadarConfig } from '@sensoro-design/charts';
import { Radar } from '@sensoro-design/charts';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [data, setData] = useState([]);
  const [config, setConfig] = useState<RadarConfig['config']>({
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 80,
      },
    },
    width: 520,
    autoFit: false,
  });

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        columnGap: 16,
        height: 600,
      }}
    >
      <div style={{ width: '40%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Radar
          title="雷达图"
          config={config}
          data={data}
          legend={{ verticalGap: 56 }}
          className="radar"
          // style={{ width: 498 }}
        />
      </div>
    </div>
  );
};
