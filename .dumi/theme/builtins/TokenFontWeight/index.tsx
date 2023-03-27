import React, { useMemo } from 'react';
import { Card, Typography, Descriptions, } from 'antd';
import { Space } from 'sensoro-design';
import tokenMeta from 'sensoro-design/es/version/token-meta.json';

import { getDesignToken } from '../../utils';

type TokenData = {
  name: string;
  desc: string;
  type: string;
  value: number;
};

const fontWeightMap = {
  fontWeightSM: {
    ...tokenMeta['fontWeightSM'],
  },
  fontWeight: {
    ...tokenMeta['fontWeight'],
  },
  fontWeightLG: {
    ...tokenMeta['fontWeightLG'],
  },
  fontWeightXL: {
    ...tokenMeta['fontWeightXL'],
  },
};

const defaultToken = getDesignToken();
const { Paragraph } = Typography;

export const TokenFontWeight: React.FC = () => {
  const data = useMemo<TokenData[]>(
    () =>
      Object.entries(fontWeightMap)
        .map(([token, meta]) => {
          return {
            name: token,
            desc: meta.desc,
            type: meta.type,
            value: (defaultToken as any)[token],
          }
        }),
    [],
  );

  return (
    <Space>
      {data.map((info) => {
        return (
          <Card style={{ minWidth: 240 }} bodyStyle={{ padding: 16 }} key={info.name} hoverable>
            <Descriptions title={info.desc} column={1} colon={false}>
              <Descriptions.Item label="字重">
                <Paragraph copyable={{ text: info.name }} style={{ margin: 0 }}>
                  {info.name}
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="字重值">
                {info.value}
              </Descriptions.Item>
              <Descriptions.Item label="示例">
                <span style={{ fontWeight: info.value }}>
                  Sensoro Design
                </span>
              </Descriptions.Item>
            </Descriptions>
          </Card>
        )
      })}
    </Space>
  );
}

export default TokenFontWeight
