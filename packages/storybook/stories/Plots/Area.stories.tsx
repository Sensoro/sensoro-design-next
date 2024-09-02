import React from 'react';
import { Area, type AreaConfig } from '@sensoro-design/plots';
import { getSharedConfig } from './utils';

const meta = {
  title: 'Plots/Area',
};

export default meta;

const basicData = [
  { country: '北美', date: 2000, value: 2699.4 },
  { country: '北美', date: 2001, value: 2640.1 },
  { country: '北美', date: 2002, value: 2687.7 },
  { country: '北美', date: 2003, value: 2700.7 },
  { country: '北美', date: 2004, value: 2759.4 },
  { country: '北美', date: 2005, value: 1275.6 },
  { country: '北美', date: 2006, value: 2761.9 },
  { country: '北美', date: 2007, value: 2809.5 },
  { country: '北美', date: 2008, value: 2759.4 },
  { country: '北美', date: 2009, value: 3632.5 },
  { country: '北美', date: 2010, value: 2720.7 },
  { country: '北美', date: 2011, value: 2722.9 },
  { country: '北美', date: 2012, value: 2665.1 },
  { country: '北美', date: 2013, value: 2738.3 },
  { country: '北美', date: 2014, value: 2766.8 },
  { country: '北美', date: 2015, value: 2739.7 },
  { country: '北美', date: 2016, value: 2761.9 },
  { country: '北美', date: 2017, value: 2772.8 },
  { country: '欧洲', date: 2000, value: 1932.1 },
  { country: '欧洲', date: 2001, value: 1959.2 },
  { country: '欧洲', date: 2002, value: 1954.8 },
  { country: '欧洲', date: 2003, value: 1991.6 },
  { country: '欧洲', date: 2004, value: 2025.4 },
  { country: '欧洲', date: 2005, value: 2037.4 },
  { country: '欧洲', date: 2006, value: 2056.4 },
  { country: '欧洲', date: 2007, value: 2041.7 },
  { country: '欧洲', date: 2008, value: 2038.5 },
  { country: '欧洲', date: 2009, value: 1932.1 },
  { country: '欧洲', date: 2010, value: 2001.1 },
  { country: '欧洲', date: 2011, value: 1949.1 },
  { country: '欧洲', date: 2012, value: 1944.3 },
  { country: '欧洲', date: 2013, value: 1934 },
  { country: '欧洲', date: 2014, value: 1871.2 },
  { country: '欧洲', date: 2015, value: 1908.7 },
  { country: '欧洲', date: 2016, value: 2934.6 },
  { country: '欧洲', date: 2017, value: 3969.5 },
  { country: '亚太地区', date: 2000, value: 2671.9 },
  { country: '亚太地区', date: 2001, value: 2759.7 },
  { country: '亚太地区', date: 2002, value: 2901.2 },
  { country: '亚太地区', date: 2003, value: 3145.5 },
  { country: '亚太地区', date: 2004, value: 3445.8 },
  { country: '亚太地区', date: 2005, value: 3724.3 },
  { country: '亚太地区', date: 2006, value: 3944 },
  { country: '亚太地区', date: 2007, value: 3001.3 },
  { country: '亚太地区', date: 2008, value: 2376.6 },
  { country: '亚太地区', date: 2009, value: 1589.1 },
  { country: '亚太地区', date: 2010, value: 2868.6 },
  { country: '亚太地区', date: 2011, value: 3203.1 },
  { country: '亚太地区', date: 2012, value: 5118.2 },
  { country: '亚太地区', date: 2013, value: 5269.9 },
  { country: '亚太地区', date: 2014, value: 5382.9 },
  { country: '亚太地区', date: 2015, value: 5472.4 },
  { country: '亚太地区', date: 2016, value: 5585.5 },
  { country: '亚太地区', date: 2017, value: 5743.6 },
];

const stackData = [
  { country: '北美', date: 2000, value: 2699.4 },
  { country: '北美', date: 2001, value: 2640.1 },
  { country: '北美', date: 2002, value: 2687.7 },
  { country: '北美', date: 2003, value: 2700.7 },
  { country: '北美', date: 2004, value: 2759.4 },
  { country: '北美', date: 2005, value: 2775.6 },
  { country: '北美', date: 2006, value: 2761.9 },
  { country: '北美', date: 2007, value: 2809.5 },
  { country: '北美', date: 2008, value: 2759.4 },
  { country: '北美', date: 2009, value: 2632.5 },
  { country: '北美', date: 2010, value: 2720.7 },
  { country: '北美', date: 2011, value: 2722.9 },
  { country: '北美', date: 2012, value: 2665.1 },
  { country: '北美', date: 2013, value: 2738.3 },
  { country: '北美', date: 2014, value: 2766.8 },
  { country: '北美', date: 2015, value: 2739.7 },
  { country: '北美', date: 2016, value: 2761.9 },
  { country: '北美', date: 2017, value: 2772.8 },
  { country: '欧洲', date: 2000, value: 1932.1 },
  { country: '欧洲', date: 2001, value: 1959.2 },
  { country: '欧洲', date: 2002, value: 1954.8 },
  { country: '欧洲', date: 2003, value: 1991.6 },
  { country: '欧洲', date: 2004, value: 2025.4 },
  { country: '欧洲', date: 2005, value: 2037.4 },
  { country: '欧洲', date: 2006, value: 2056.4 },
  { country: '欧洲', date: 2007, value: 2041.7 },
  { country: '欧洲', date: 2008, value: 2038.5 },
  { country: '欧洲', date: 2009, value: 1932.1 },
  { country: '欧洲', date: 2010, value: 2001.1 },
  { country: '欧洲', date: 2011, value: 1949.1 },
  { country: '欧洲', date: 2012, value: 1944.3 },
  { country: '欧洲', date: 2013, value: 1934 },
  { country: '欧洲', date: 2014, value: 1871.2 },
  { country: '欧洲', date: 2015, value: 1908.7 },
  { country: '欧洲', date: 2016, value: 1934.6 },
  { country: '欧洲', date: 2017, value: 1969.5 },
  { country: '亚太地区', date: 2000, value: 2671.9 },
  { country: '亚太地区', date: 2001, value: 2759.7 },
  { country: '亚太地区', date: 2002, value: 2901.2 },
  { country: '亚太地区', date: 2003, value: 3145.5 },
  { country: '亚太地区', date: 2004, value: 3445.8 },
  { country: '亚太地区', date: 2005, value: 3724.3 },
  { country: '亚太地区', date: 2006, value: 3944 },
  { country: '亚太地区', date: 2007, value: 4195.2 },
  { country: '亚太地区', date: 2008, value: 4310.8 },
  { country: '亚太地区', date: 2009, value: 4411.1 },
  { country: '亚太地区', date: 2010, value: 4696.1 },
  { country: '亚太地区', date: 2011, value: 4951.1 },
  { country: '亚太地区', date: 2012, value: 5118.2 },
  { country: '亚太地区', date: 2013, value: 5269.9 },
  { country: '亚太地区', date: 2014, value: 5382.9 },
  { country: '亚太地区', date: 2015, value: 5472.4 },
  { country: '亚太地区', date: 2016, value: 5585.5 },
  { country: '亚太地区', date: 2017, value: 5743.6 },
];

export function Basic() {
  const sharedConfig = getSharedConfig<AreaConfig>();

  const config: AreaConfig = {
    ...sharedConfig,
    title: {
      title: '基础面积图',
      size: -1,
    },
    data: basicData,
    xField: 'date',
    yField: 'value',
    colorField: 'country',
    legend: {
      color: {
        x: -24,
        y: -16,
        layout: {
          justifyContent: 'flex-end',
        },
      },
    },
  };

  return (
    <Area {...config} />
  );
}

export function Stack() {
  const sharedConfig = getSharedConfig<AreaConfig>();

  const config: AreaConfig = {
    ...sharedConfig,
    title: '堆叠面积图',
    data: stackData,
    xField: 'date',
    yField: 'value',
    colorField: 'country',
    stack: true,
  };

  return (
    <Area {...config} />
  );
}
