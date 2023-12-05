import type { LineConfig } from '@sensoro-design/charts';
import { Line } from '@sensoro-design/charts';
import { map } from 'lodash';
import React, { useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<LineConfig['config']>({
    data: [
      { year: '2010', value: 3107, category: 'Liquid fuel' },
      { year: '2010', value: 3812, category: 'Solid fuel' },
      { year: '2010', value: 1696, category: 'Gas fuel' },
      { year: '2010', value: 446, category: 'Cement production' },
      { year: '2010', value: 67, category: 'Gas flarinl' },
      { year: '2011', value: 3134, category: 'Liquid fuel' },
      { year: '2011', value: 4055, category: 'Solid fuel' },
      { year: '2011', value: 1756, category: 'Gas fuel' },
      { year: '2011', value: 494, category: 'Cement production' },
      { year: '2011', value: 64, category: 'Gas flarinl' },
      { year: '2012', value: 3200, category: 'Liquid fuel' },
      { year: '2012', value: 4106, category: 'Solid fuel' },
      { year: '2012', value: 1783, category: 'Gas fuel' },
      { year: '2012', value: 519, category: 'Cement production' },
      { year: '2012', value: 65, category: 'Gas flarinl' },
      { year: '2013', value: 3220, category: 'Liquid fuel' },
      { year: '2013', value: 4126, category: 'Solid fuel' },
      { year: '2013', value: 1806, category: 'Gas fuel' },
      { year: '2013', value: 554, category: 'Cement production' },
      { year: '2013', value: 68, category: 'Gas flarinl' },
      { year: '2014', value: 3280, category: 'Liquid fuel' },
      { year: '2014', value: 4117, category: 'Solid fuel' },
      { year: '2014', value: 1823, category: 'Gas fuel' },
      { year: '2014', value: 568, category: 'Cement production' },
      { year: '2014', value: 68, category: 'Gas flarinl' },
    ],
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
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
            processData: (name, index) => `类型${name}${index + 1}`,
          }}
          title="多条折线图"
          type="multiple"
          config={config}
          showPoint
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
