import React from 'react';
import { css } from '@emotion/react'
import { Descriptions, Typography } from 'antd';
import { useSiteToken } from '../../../hooks/useSiteToken';

export const useStyle = () => {
  return {
    example: css({
      display: 'flex',
      alignItems: 'center',
      height: '100%',

      '> div': {
        width: 200,
        display: 'inline-block',
      }
    }),
  }
}

const { Paragraph } = Typography;

export const TokenBorderStyle: React.FC = () => {
  const { token } = useSiteToken();
  const styles = useStyle();

  const borderStyles = [
    {
      name: 'solid',
      color: 'colorBorder',
    },
    {
      name: 'dashed',
      color: 'colorBorderDashed'
    },
  ];

  return (
    <>
      {borderStyles.map((borderStyle) => {
        return (
          <Descriptions key={borderStyle.name} title={borderStyle.name} column={1}>
            <Descriptions.Item label="边框颜色">
              <Paragraph copyable={{ text: borderStyle.color }} style={{ margin: 0 }}>
                {borderStyle.color}
              </Paragraph>
            </Descriptions.Item>
            <Descriptions.Item label="示例">
              <div css={styles.example}>
                <div style={{ border: `1px ${borderStyle.name} ${token[borderStyle.color]}` }}/>
              </div>
            </Descriptions.Item>
          </Descriptions>
        )
      })}
    </>
  );
}

export default TokenBorderStyle;
