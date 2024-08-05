import type { TreemapConfig } from '@sensoro-design/charts';
import { Treemap } from '@sensoro-design/charts';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<TreemapConfig['config']>({
    data: { name: 'root', children: [] },
    colorField: 'brand',
    tooltip: {
      formatter: (v: any) => {
        return {
          name: v.name,
          value: `${v.value}`,
        };
      },
    },
  });

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/mobile.json')
      .then((response) => response.json())
      .then((json) =>
        // @ts-ignore
        setConfig({
          ...config,
          data: {
            name: 'root',
            children: json,
          },
        }),
      )
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
        <Treemap key="11" title="多级矩形树图" config={config} />
      </div>
    </div>
  );
};
