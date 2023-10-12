import type { AreaConfig } from '@sensoro-design/charts';
import { Area } from '@sensoro-design/charts';
import { slice } from 'lodash';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<AreaConfig['config']>({
    data: [],
    xField: 'Date',
    yField: 'scales',
    tooltip: {
      formatter: (data: any) => {
        return { name: '销售额', value: data.scales };
      },
    },
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then((response) => response.json())
      .then((json) => setConfig({ ...config, data: slice(json, 0, 10) }))
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
      <div style={{ width: '40%' }}>
        <EditorDemo
          value={JSON.stringify(config, null, 2)}
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Area title="基础折线图" type="gradient" config={config} />
      </div>
    </div>
  );
};
