import type { LineConfig } from '@sensoro-design/charts';
import { Line } from '@sensoro-design/charts';
import { map } from 'lodash';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<LineConfig['config']>({
    data: [],
    xField: 'Date',
    yField: 'scales',
    width: 540,
    height: 120,
    appendPadding: [0, 60, 0, 0],
    annotations: [
      {
        type: 'text',
        position: ['max', 'median'],
        content: (datas) => {
          const tmp = datas
            .map((item: any) => item.scales)
            .sort((a, b) => a - b);
          const median =
            tmp.length % 2 === 0
              ? Math.round((tmp[tmp.length / 2 - 1] + tmp[tmp.length / 2]) / 2)
              : Math.round(tmp[(tmp.length - 1) / 2]);

          return `均值:${median}`;
        },
        offsetY: 6,
        offsetX: 4,
        style: {
          textBaseline: 'bottom',
          color: '#F72231',
          fill: '#F72231',
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F72231',
          lineDash: [2, 2],
        },
      },
    ],
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
        <Line
          legend={{
            processData: (name, index) => `类型${index + 1}`,
          }}
          title="均值线折线图"
          type="basic"
          config={config}
          customContentData={(data) => {
            return map(data, (item, idx) => ({
              ...item,
              name: `类型${idx * 10 + 1}`,
              value: `${item.value}`.replace(
                /\d{1,3}(?=(\d{3})+$)/g,
                (s) => `${s},`,
              ),
            }));
          }}
          style={{ width: 588 }}
        />
      </div>
    </div>
  );
};
