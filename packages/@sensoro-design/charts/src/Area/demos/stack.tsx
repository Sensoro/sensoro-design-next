import type { AreaConfig } from '@sensoro-design/charts';
import { Area } from '@sensoro-design/charts';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<AreaConfig>({
    data: [],
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json',
    )
      .then((response) => response.json())
      .then((json) => setConfig({ ...config, data: json }))
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
        <Area config={config} />
      </div>
    </div>
  );
};
