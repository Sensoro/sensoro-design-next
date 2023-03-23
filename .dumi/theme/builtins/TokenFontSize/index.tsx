import React from 'react';
import { Table } from 'antd';
import tokenMeta from 'sensoro-design/es/version/token-meta.json';

import { getDesignToken } from '../../utils';

type TokenData = {
  name: string;
  desc: string;
  type: string;
  value: number;
};

const fontSizeMap = {
  fontSizeSM: {
    ...tokenMeta['fontSizeSM'],
    desc: '小号',
    lineHeight: 'lineHeightSM'
  },
  fontSize: {
    ...tokenMeta['fontSize'],
    desc: '标准',
    lineHeight: 'lineHeight'
  },
  fontSizeLG: {
    ...tokenMeta['fontSizeLG'],
    desc: '大号',
    lineHeight: 'flineHeightLG'
  },
  fontSizeXL: {
    ...tokenMeta['fontSizeXL'],
    desc: '超大号',
    lineHeight: 'fontSizeXL'
  },
};

const defaultToken = getDesignToken();

export const TokenFontSize: React.FC = () => {
  const columns = [
    {
      title: '级别',
      key: 'desc',
      dataIndex: 'desc',
    },
    {
      title: '字号',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: '行号',
      key: 'lineHeight',
      dataIndex: 'lineHeight',
    },
    {
      title: '字号值',
      key: 'value',
      dataIndex: 'value',
    },
    {
      title: '行号值',
      key: 'lineHeightValue',
      dataIndex: 'lineHeightValue',
    },
  ];

  const data = React.useMemo<TokenData[]>(
    () =>
      Object.entries(fontSizeMap)
        .map(([token, meta]) => {
          const lineHeight = token.replace('fontSize', 'lineHeight');

          return {
            name: token,
            desc: meta.desc,
            type: meta.type,
            value: (defaultToken as any)[token],
            lineHeight: lineHeight,
            lineHeightValue: (defaultToken as any)[lineHeight],
          }
        }),
    [],
  );

  return <Table dataSource={data} rowKey="name" columns={columns} pagination={false} bordered />;
}

export default TokenFontSize
