import type { LineConfig } from '@sensoro-design/charts';
import React, { useEffect, useState } from 'react';

import { Line } from '@sensoro-design/charts';
import EditorDemo from '../../../docs/components/Editor';

import { Button } from 'antd';
import { Space } from 'antd/es';

export default () => {
  const [config, setConfig] = useState<LineConfig>({
    // 注释
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    data: [],
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
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
    <Space direction="vertical" size={12} style={{ width: '100%' }}>
      <Button>隐藏配置栏</Button>
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
          <Line {...config} />
        </div>
      </div>
    </Space>
  );
};
