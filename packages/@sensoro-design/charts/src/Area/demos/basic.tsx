import type { AreaConfig } from '@sensoro-design/charts';
import { Area } from '@sensoro-design/charts';
import React, { useEffect, useState } from 'react';
import EditorDemo from '../../../docs/components/Editor';

export default () => {
  const [config, setConfig] = useState<AreaConfig['config']>({
    data: [
      // {
      //   timePeriod: '2008 Q4',
      //   value: 2.07,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2009 Q1',
      //   value: 2.39,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2009 Q2',
      //   value: 2.71,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2011 Q1',
      //   value: 2.8,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2011 Q2',
      //   value: 2.8,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2011 Q3',
      //   value: 2.84,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2011 Q4',
      //   value: 2.75,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2012 Q1',
      //   value: 2.64,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2012 Q2',
      //   value: 2.55,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2012 Q3',
      //   value: 2.46,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2012 Q4',
      //   value: 2.45,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2013 Q1',
      //   value: 2.57,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2013 Q2',
      //   value: 2.68,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2013 Q3',
      //   value: 2.8,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2013 Q4',
      //   value: 2.89,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2014 Q1',
      //   value: 2.85,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2014 Q2',
      //   value: 2.73,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2014 Q3',
      //   value: 2.54,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2014 Q4',
      //   value: 2.32,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2015 Q1',
      //   value: 2.25,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2015 Q2',
      //   value: 2.33,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2015 Q3',
      //   value: 2.53,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2015 Q4',
      //   value: 2.74,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2016 Q1',
      //   value: 2.76,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2016 Q2',
      //   value: 2.61,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2016 Q3',
      //   value: 2.35,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2016 Q4',
      //   value: 2.11,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2017 Q1',
      //   value: 2.08,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2017 Q2',
      //   value: 2.2,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2017 Q3',
      //   value: 2.38,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2017 Q4',
      //   value: 2.59,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2018 Q1',
      //   value: 2.63,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2018 Q2',
      //   value: 2.67,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2018 Q3',
      //   value: 2.64,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2018 Q4',
      //   value: 2.5,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2019 Q1',
      //   value: 2.31,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2019 Q2',
      //   value: 2.04,
      //   type: 'value',
      // },
      // {
      //   timePeriod: '2018 Q2',
      //   value: 2.57,
      //   type: 'value2',
      // },
      // {
      //   timePeriod: '2018 Q3',
      //   value: 2.74,
      //   type: 'value2',
      // },
      // {
      //   timePeriod: '2018 Q4',
      //   value: 2.6,
      //   type: 'value2',
      // },
      // {
      //   timePeriod: '2019 Q1',
      //   value: 2.11,
      //   type: 'value2',
      // },
      // {
      //   timePeriod: '2019 Q2',
      //   value: 2.24,
      //   type: 'value2',
      // },
    ],
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    seriesField: 'type',
  });

  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json',
    )
      .then((response) => response.json())
      .then((json) =>
        setConfig({
          ...config,
          data: [
            ...json.map((item: any) => ({
              ...item,
              type: 'value',
            })),
          ],
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
        <Area title="基础面积图" config={config} legend type="basic" />
      </div>
    </div>
  );
};
