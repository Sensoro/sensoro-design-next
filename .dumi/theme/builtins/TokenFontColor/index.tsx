import React, { useMemo } from 'react';
import { Card, Typography, Descriptions, Row, Col } from 'antd';
import tokenMeta from 'sensoro-design/es/version/token-meta.json';
import { css } from '@emotion/react';
import { useSiteToken } from '../../../hooks/useSiteToken';

import { getDesignToken } from '../../utils';

type TokenData = {
  name: string;
  desc: string;
  type: string;
  value: string;
};

const fontColorMap = {
  colorText: {
    ...tokenMeta['colorText'],
    desc: ''
  },
  colorTextSecondary: {
    ...tokenMeta['colorTextSecondary'],
  },
  colorTextTertiary: {
    ...tokenMeta['colorTextTertiary'],
  },
  colorTextQuaternary: {
    ...tokenMeta['colorTextQuaternary'],
  },
};

const defaultToken = getDesignToken();
const { Paragraph } = Typography;

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    dot: css({
      display: 'inline-block',
      width: 6,
      height: 6,
      borderRadius: token.borderRadiusLG,
      marginInlineEnd: 4,
      border: `1px solid ${token.colorSplit}`,
    }),
  };
};


export const TokenFontColor: React.FC = () => {
  const styles = useStyle();

  const data = useMemo<TokenData[]>(
    () =>
      Object.entries(fontColorMap)
        .map(([token, meta]) => {
          return {
            name: token,
            desc: meta.name,
            type: meta.type,
            value: (defaultToken as any)[token],
          }
        }),
    [],
  );

  return (
    <Row gutter={[8, 8]}>
      {data.map((info) => {
        return (
          <Col key={info.name} span={6}>
            <Card hoverable>
              <Descriptions title={info.desc} column={1} colon={false}>
                <Descriptions.Item label="变量">
                  <Paragraph copyable={{ text: info.name }} style={{ margin: 0 }}>
                    {info.name}
                  </Paragraph>
                </Descriptions.Item>
                <Descriptions.Item label="色值">
                  <span css={styles.dot} style={{ backgroundColor: info.value }} />
                  {info.value}
                </Descriptions.Item>
                <Descriptions.Item label="示例">
                  <span style={{ color: info.value }}>
                    Sensoro Design
                  </span>
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </Col>
        )
      })}
    </Row>
  );
}

export default TokenFontColor
