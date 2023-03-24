import React from 'react';
import { Card, Typography, Descriptions, } from 'antd';
import { Space } from 'sensoro-design';
import tokenMeta from 'sensoro-design/es/version/token-meta.json';

import { getDesignToken } from '../../utils';

type TokenData = {
  name: string;
  desc: string;
  type: string;
  value: number;
  lineHeight: string;
  lineHeightValue: number;
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
const { Paragraph } = Typography;

export const TokenFontSize: React.FC = () => {
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

  return (
    <Space>
      {data.map((info) => {
        return (
          <Card style={{ minWidth: 240 }} key={info.name} hoverable>
            <Descriptions title={info.desc} column={1} colon={false}>
              <Descriptions.Item label="字号">
                <Paragraph copyable={{ text: info.name }} style={{ margin: 0 }}>
                  {info.name}
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="字号值">
                {info.value}
              </Descriptions.Item>
              <Descriptions.Item label="行高">
                <Paragraph copyable={{ text: info.lineHeight }} style={{ margin: 0 }}>
                  {info.lineHeight}
                </Paragraph>
              </Descriptions.Item>
              <Descriptions.Item label="行高值">
                {parseFloat(info.lineHeightValue.toFixed(4))}
              </Descriptions.Item>
              <Descriptions.Item label="示例">
                <span style={{ fontSize: info.value }}>
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

export default TokenFontSize
