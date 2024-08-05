import type { LineConfig } from '@sensoro-design/charts';
import { Line } from '@sensoro-design/charts';
import { map } from 'lodash';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<LineConfig['config']>({
    data: [
      { year: '2010', value: 110, category: 'Liquid fuel' },
      { year: '2010', value: 121, category: 'Solid fuel' },
      { year: '2010', value: 170, category: 'Gas flarinl' },
      { year: '2011', value: 113, category: 'Liquid fuel' },
      { year: '2011', value: 105, category: 'Solid fuel' },
      { year: '2011', value: 164, category: 'Gas flarinl' },
      { year: '2012', value: 120, category: 'Liquid fuel' },
      { year: '2012', value: 110, category: 'Solid fuel' },
      { year: '2012', value: 150, category: 'Gas flarinl' },
      { year: '2013', value: 122, category: 'Liquid fuel' },
      { year: '2013', value: 112, category: 'Solid fuel' },
      { year: '2013', value: 138, category: 'Gas flarinl' },
      { year: '2014', value: 128, category: 'Liquid fuel' },
      { year: '2014', value: 111, category: 'Solid fuel' },
      { year: '2014', value: 168, category: 'Gas flarinl' },
      { year: '2015', value: 128, category: 'Liquid fuel' },
      { year: '2015', value: 111, category: 'Solid fuel' },
      { year: '2015', value: 168, category: 'Gas flarinl' },
      { year: '2016', value: 138, category: 'Liquid fuel' },
      { year: '2016', value: 151, category: 'Solid fuel' },
      { year: '2016', value: 168, category: 'Gas flarinl' },
      { year: '2017', value: 178, category: 'Liquid fuel' },
      { year: '2017', value: 131, category: 'Solid fuel' },
      { year: '2017', value: 168, category: 'Gas flarinl' },
    ],
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    smooth: true,
  });

  // const asyncFetch = () => {
  //   fetch(
  //     'https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json',
  //   )
  //     .then((response) => response.json())
  //     .then((json) => setConfig({ ...config, data: json }))
  //     .catch((error) => {
  //       console.log('fetch data failed', error);
  //     });
  // };

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
          onChange={(v) => setConfig(JSON.parse(v as string))}
        />
      </div>
      <div style={{ width: '60%' }}>
        <Line
          legend={{
            processData: (name, index) => `类型${index + 1}`,
          }}
          title="多条曲线图"
          type="multiple"
          config={config}
          showPoint={false}
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
        />
      </div>
    </div>
  );
};
