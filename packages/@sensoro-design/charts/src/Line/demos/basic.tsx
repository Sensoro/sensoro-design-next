<<<<<<< HEAD
import type { AreaConfig } from '@sensoro-design/charts';
import { Area } from '@sensoro-design/charts';
import { slice } from 'lodash';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<AreaConfig['config']>({
    data: [],
=======
import type { LineConfig } from '@sensoro-design/charts';
import { Line } from '@sensoro-design/charts';
import { map } from 'lodash';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<LineConfig['config']>({
>>>>>>> fdd210b (fix: 折线图UI)
    xField: 'Date',
    yField: 'scales',
    tooltip: {
      formatter: (data: any) => {
        return { name: '销售额', value: data.scales };
      },
    },
    data: [
      { Date: '2010-01', scales: 1998 },
      { Date: '2010-02', scales: 1850 },
      { Date: '2010-03', scales: 1720 },
      { Date: '2010-04', scales: 1818 },
      { Date: '2010-05', scales: 1920 },
      { Date: '2010-06', scales: 1802 },
      { Date: '2010-07', scales: 1945 },
      { Date: '2010-08', scales: 1856 },
      { Date: '2010-09', scales: 2107 },
      { Date: '2010-10', scales: 2140 },
      { Date: '2010-11', scales: 2311 },
      { Date: '2010-12', scales: 1972 },
    ],
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    )
      .then(response => response.json())
      .then(json => setConfig({ ...config, data: slice(json, 0, 10) }))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  // useEffect(() => {
  //   asyncFetch();
  // }, []);

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
          onChange={v => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Area title="基础折线图" type="gradient" config={config} />
      </div>
    </div>
  );
};
