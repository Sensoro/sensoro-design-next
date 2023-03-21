import React from 'react';
import { message, Tooltip, Row, Col } from 'antd';
import { css } from '@emotion/react';
import InfoCircleOutlined from '@sensoro-design/icons/InfoCircleOutlined';
import CopyToClipboard from 'react-copy-to-clipboard';
import tokenMeta from 'sensoro-design/es/version/token-meta.json';
import { useSiteToken } from '../../../hooks/useSiteToken';


const boxShadowMap = {
  boxShadowNone: {
    ...tokenMeta['boxShadowNone']
  },
  boxShadow: {
    ...tokenMeta['boxShadow']
  },
  boxShadowSecondary: {
    ...tokenMeta['boxShadowSecondary']
  },
  boxShadowTertiary: {
    ...tokenMeta['boxShadowTertiary']
  },
  boxShadowFourth: {
    ...tokenMeta['boxShadowFourth']
  },
  boxShadowFifth: {
    ...tokenMeta['boxShadowFifth']
  }
};

export const useStyle = () => {
  const { token } = useSiteToken();

  return {
    container: css({
      position: 'relative',
      backgroundColor: token.colorBgContainer,
      boxSizing: 'border-box',
      width: '100%',
      cursor: 'pointer',
      padding: token.paddingLG,
    }),
    item: css({
      height: 228,
      padding: token.paddingXS,
      backgroundColor: token.colorWhite,
    }),
    name: css({
      marginTop: token.marginXS,

      '> span': {
        marginLeft: token.marginXXS,
      },
    }),
    value: css({
      padding: `${token.paddingXXS}px ${token.paddingXS}px`,
      marginT: token.marginXS,
      fontSize: 12,
    }),
    boxShadow: css({
      height: 100,
      width: 100,
      margin: '0 auto',
    }),
  }
}

const TokenBoxShadow: React.FC = () => {
  const { token } = useSiteToken();
  const styles = useStyle();

  return (
    <div css={styles.container}>
      <Row gutter={[16, 16]}>
        {(Object.keys(boxShadowMap)).map((boxShadowKey) => {
          const boxShadowInfo = boxShadowMap[boxShadowKey];

          return (
            <CopyToClipboard
              text={boxShadowKey}
              onCopy={() => message.success(`copied: ${boxShadowKey}`)}
              key={boxShadowKey}
            >
              <Col span={8}>
                <div css={styles.item} style={{ boxShadow: token[boxShadowKey] }}>
                  <div css={styles.name}>
                    {boxShadowInfo.name}
                    {boxShadowInfo.desc && (
                      <Tooltip title={boxShadowInfo.desc}>
                        <InfoCircleOutlined />
                      </Tooltip>
                    )}
                  </div>
                  <div css={styles.value}>
                    {boxShadowKey}
                    <br />
                    {token[boxShadowKey]}
                  </div>
                </div>
              </Col>
            </CopyToClipboard>
          )
        })}
      </Row>

    </div>
  )
}

export default TokenBoxShadow;
