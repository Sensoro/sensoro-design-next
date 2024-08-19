import React from 'react';
import { Renderer as SVGRenderer } from '@antv/g-svg';
import { Treemap, type TreemapConfig } from '@sensoro-design/plots';

const meta = {
  title: 'Plots/Treemap',
};

export default meta;

const data = {
  name: 'root',
  children: [
    { name: '分类 1', value: 560 },
    { name: '分类 2', value: 500 },
    { name: '分类 3', value: 150 },
    { name: '分类 4', value: 140 },
    { name: '分类 5', value: 115 },
    { name: '分类 6', value: 95 },
    { name: '分类 7', value: 90 },
    { name: '分类 8', value: 75 },
    { name: '分类 9', value: 98 },
    { name: '分类 10', value: 60 },
    { name: '分类 11', value: 45 },
    { name: '分类 12', value: 40 },
    { name: '分类 13', value: 40 },
    { name: '分类 14', value: 35 },
    { name: '分类 15', value: 40 },
    { name: '分类 16', value: 40 },
    { name: '分类 17', value: 40 },
    { name: '分类 18', value: 30 },
    { name: '分类 19', value: 28 },
    { name: '分类 20', value: 16 },
  ],
};

const data2 = {
  name: 'root',
  children: [
    {
      name: '其他',
      brand: '其他',
      value: 10.09647118932181,
      children: [
        {
          name: '其他',
          value: 10.0965,
        },
      ],
    },
    {
      name: '华为',
      brand: '华为',
      value: 8.45923464256909,
      children: [
        {
          name: '华为荣耀3X',
          value: 0.4411,
        },
        {
          name: '华为荣耀3C',
          value: 0.4072,
        },
        {
          name: '华为P6',
          value: 0.3111,
        },
        {
          name: '华为Y511-T00',
          value: 0.2594,
        },
        {
          name: '华为 H60-L01',
          value: 0.2561,
        },
        {
          name: '华为荣耀畅玩4X',
          value: 0.2477,
        },
        {
          name: '华为G610',
          value: 0.2352,
        },
        {
          name: '华为C8812',
          value: 0.2259,
        },
        {
          name: '华为G621-TL00',
          value: 0.2124,
        },
        {
          name: '华为MT7-TL10 ',
          value: 0.2051,
        },
        {
          name: '华为p7-l07',
          value: 0.2,
        },
        {
          name: '华为荣耀Che1-CL10',
          value: 0.1992,
        },
        {
          name: '华为mt7-cl00',
          value: 0.1955,
        },
        {
          name: '华为c8817d',
          value: 0.1859,
        },
        {
          name: '华为 p7-l09',
          value: 0.1752,
        },
        {
          name: '华为C8815',
          value: 0.1716,
        },
        {
          name: '华为C8813',
          value: 0.1565,
        },
        {
          name: '华为mt7-tl00',
          value: 0.1492,
        },
        {
          name: '华为G520',
          value: 0.1473,
        },
        {
          name: '华为C8816',
          value: 0.1422,
        },
        {
          name: '华为荣耀6 Plus',
          value: 0.137,
        },
        {
          name: '华为荣耀che1-cl20',
          value: 0.1354,
        },
        {
          name: '华为G730',
          value: 0.1213,
        },
        {
          name: '华为G620-L75',
          value: 0.1209,
        },
        {
          name: '华为荣耀3c',
          value: 0.119,
        },
        {
          name: '华为hol-t00',
          value: 0.1146,
        },
        {
          name: '华为C8813Q',
          value: 0.1136,
        },
        {
          name: '华为g7-tl00',
          value: 0.1011,
        },
        {
          name: '华为荣耀6',
          value: 0.101,
        },
        {
          name: '其他',
          value: 0.3379,
        },
      ],
    },
    {
      name: '小米',
      brand: '小米',
      value: 8.168930119898944,
      children: [
        {
          name: '小米手机M3',
          value: 2.5106,
        },
        {
          name: '小米手机2S',
          value: 1.6483,
        },
        {
          name: '小米手机M4',
          value: 1.5656,
        },
        {
          name: '小米手机M2',
          value: 0.5365,
        },
        {
          name: '小米手机2A',
          value: 0.4249,
        },
        {
          name: '小米手机1s',
          value: 0.3743,
        },
        {
          name: '小米手机M1',
          value: 0.3527,
        },
        {
          name: '小米Note',
          value: 0.3486,
        },
        {
          name: '小米平板',
          value: 0.2879,
        },
        {
          name: '其他',
          value: 0.1195,
        },
      ],
    },
    {
      name: '红米',
      brand: '红米',
      value: 6.860016513545617,
      children: [
        {
          name: '红米手机1s',
          value: 2.0981,
        },
        {
          name: '红米note',
          value: 1.9054,
        },
        {
          name: '红米手机',
          value: 0.9529,
        },
        {
          name: '红米Note 1s',
          value: 0.8712,
        },
        {
          name: '红米HM2a',
          value: 0.6083,
        },
        {
          name: '红米1S',
          value: 0.377,
        },
        {
          name: '其他',
          value: 0.047,
        },
      ],
    },
    {
      name: 'vivo',
      brand: 'vivo',
      value: 6.6900485928653595,
      children: [
        {
          name: 'vivo X3T',
          value: 0.5202,
        },
        {
          name: 'vivo Y27',
          value: 0.3573,
        },
        {
          name: 'vivo Y13l',
          value: 0.3561,
        },
        {
          name: 'vivo Y11it',
          value: 0.3427,
        },
        {
          name: 'vivo X5Max',
          value: 0.3199,
        },
        {
          name: 'vivo Y23L',
          value: 0.3177,
        },
        {
          name: 'vivo Y13',
          value: 0.2781,
        },
        {
          name: 'vivo X3L',
          value: 0.2702,
        },
        {
          name: 'vivo X5sl',
          value: 0.2614,
        },
        {
          name: 'vivo X5L',
          value: 0.2418,
        },
        {
          name: 'vivo Y11',
          value: 0.2265,
        },
        {
          name: 'vivo Y181',
          value: 0.1811,
        },
        {
          name: 'vivo Y17',
          value: 0.159,
        },
        {
          name: 'vivo S7I',
          value: 0.1549,
        },
        {
          name: 'vivo X710L',
          value: 0.1387,
        },
        {
          name: 'vivo Y221',
          value: 0.1354,
        },
        {
          name: 'vivo X5',
          value: 0.1354,
        },
        {
          name: 'vivo Xplay3S',
          value: 0.1306,
        },
        {
          name: 'vivo Xplay',
          value: 0.1196,
        },
        {
          name: 'vivo Y28L',
          value: 0.1175,
        },
        {
          name: 'vivo Y29L',
          value: 0.1173,
        },
        {
          name: 'vivo Y15',
          value: 0.1116,
        },
        {
          name: 'vivo Y913',
          value: 0.1033,
        },
        {
          name: 'vivo S7t',
          value: 0.0951,
        },
        {
          name: 'vivo Y22L',
          value: 0.0887,
        },
        {
          name: 'vivo X1St',
          value: 0.088,
        },
        {
          name: 'vivo Y613',
          value: 0.0864,
        },
        {
          name: 'vivo X3S',
          value: 0.0838,
        },
        {
          name: 'vivo Y20',
          value: 0.0816,
        },
        {
          name: 'vivo X1',
          value: 0.0794,
        },
        {
          name: 'vivo X520l',
          value: 0.079,
        },
        {
          name: 'vivo Y927',
          value: 0.0653,
        },
        {
          name: 'vivo y13t',
          value: 0.0646,
        },
        {
          name: 'vivo X3l',
          value: 0.0624,
        },
        {
          name: 'vivo S11t',
          value: 0.0532,
        },
        {
          name: 'vivo S7',
          value: 0.0511,
        },
        {
          name: 'vivo H8S',
          value: 0.0501,
        },
        {
          name: 'vivo Y19t',
          value: 0.0489,
        },
        {
          name: 'vivo Y11iw',
          value: 0.0489,
        },
        {
          name: 'vivo Y928',
          value: 0.0396,
        },
        {
          name: 'vivo S9',
          value: 0.0377,
        },
        {
          name: 'vivo Y3t',
          value: 0.0368,
        },
        {
          name: 'vivo Y22',
          value: 0.0364,
        },
        {
          name: 'vivo Y11t',
          value: 0.0352,
        },
        {
          name: 'vivo X5Max',
          value: 0.0306,
        },
        {
          name: '其他',
          value: 0.2509,
        },
      ],
    },
    {
      name: 'OPPO',
      brand: 'OPPO',
      value: 4.724206371886631,
      children: [
        {
          name: 'OPPO 1107',
          value: 0.3173,
        },
        {
          name: 'OPPO R831S',
          value: 0.2395,
        },
        {
          name: 'OPPO R7007',
          value: 0.2307,
        },
        {
          name: 'OPPO R2017',
          value: 0.2252,
        },
        {
          name: 'OPPO R1s',
          value: 0.2232,
        },
        {
          name: 'OPPO R8207',
          value: 0.2153,
        },
        {
          name: 'OPPO R831t',
          value: 0.1976,
        },
        {
          name: 'OPPO R821t',
          value: 0.1796,
        },
        {
          name: 'OPPO R6007',
          value: 0.1794,
        },
        {
          name: 'OPPO X9007',
          value: 0.1622,
        },
        {
          name: 'oppo a31t',
          value: 0.1552,
        },
        {
          name: 'OPPO R819T',
          value: 0.1279,
        },
        {
          name: 'OPPO 3007',
          value: 0.1276,
        },
        {
          name: 'OPPO N5117',
          value: 0.1156,
        },
        {
          name: 'OPPO R827T',
          value: 0.1111,
        },
        {
          name: 'OPPO 1105',
          value: 0.1056,
        },
        {
          name: 'OPPO R1',
          value: 0.1011,
        },
        {
          name: 'OPPO R823T',
          value: 0.1007,
        },
        {
          name: ' OPPO R8107',
          value: 0.1004,
        },
        {
          name: 'OPPO U705T',
          value: 0.0973,
        },
        {
          name: 'OPPO Find 5',
          value: 0.096,
        },
        {
          name: 'OPPO R811',
          value: 0.091,
        },
        {
          name: 'OPPO Finder(X907)',
          value: 0.0903,
        },
        {
          name: 'OPPO R815t',
          value: 0.0871,
        },
        {
          name: 'OPPO X909',
          value: 0.0851,
        },
        {
          name: 'OPPO N1',
          value: 0.0772,
        },
        {
          name: 'OPPO U707T',
          value: 0.0764,
        },
        {
          name: 'OPPO r7005',
          value: 0.0685,
        },
        {
          name: 'Oppo Find 5',
          value: 0.066,
        },
        {
          name: 'OPPO R833T',
          value: 0.0653,
        },
        {
          name: 'OPPO r8205 ',
          value: 0.0468,
        },
        {
          name: 'OPPO R813T',
          value: 0.046,
        },
        {
          name: 'OPPO N3',
          value: 0.0429,
        },
        {
          name: 'OPPO R809T',
          value: 0.0418,
        },
        {
          name: 'OPPO 6607 ',
          value: 0.0375,
        },
        {
          name: 'OPPO Real R801',
          value: 0.0352,
        },
        {
          name: 'OPPO U701',
          value: 0.0327,
        },
        {
          name: 'OPPO X9077',
          value: 0.0272,
        },
        {
          name: 'OPPO T29',
          value: 0.027,
        },
        {
          name: 'OPPO Real R817',
          value: 0.0224,
        },
        {
          name: 'OPPO R827t',
          value: 0.0215,
        },
        {
          name: 'OPPO 3005',
          value: 0.0203,
        },
        {
          name: 'OPPO 1100',
          value: 0.0199,
        },
        {
          name: '其他',
          value: 0.1877,
        },
      ],
    },
  ],
};

export function Basic() {
  const config: TreemapConfig = {
    title: '矩形树图',
    data,
    valueField: 'value',
    tooltip: {
      title: d => d.data.name,
    },
    legend: false,
  };

  // @ts-expect-error 暂时忽略
  return <Treemap {...config} renderer={new SVGRenderer()} />;
}

export function MoreTier() {
  const config: TreemapConfig = {
    title: '多级矩形树图',
    data: data2,
    valueField: 'value',
    tooltip: {
      title: d => d.data.name,
    },
    legend: false,
  };

  // @ts-expect-error 暂时忽略
  return <Treemap {...config} renderer={new SVGRenderer()} />;
}
