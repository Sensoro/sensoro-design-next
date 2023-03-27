import React from 'react';
import { message, Tooltip, Row, Col, Divider } from 'antd';
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
      padding: token.padding,
    }),
    item: css({
      height: 228,
      padding: token.padding,
      backgroundColor: token.colorWhite,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }),
    info: css({
      marginTop: token.marginXS,

      '> span': {
        marginLeft: token.marginXXS,
      },
    }),
    name: css({
      fontSize: token.fontSize,
      fontWeight: token.fontWeightLG,
      marginTop: token.marginXS,
    }),
    value: css({
      padding: `${token.paddingXXS}px ${token.paddingXS}px`,
      marginTop: token.marginXS,
      fontSize: 12,

      '> p + p': {
        marginTop: token.marginXS,
      }
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

  const getBoxShadowDom = (value: string) => {
    return value
      .replace(/\n/g, '')
      .split('),')
      .reduce<React.ReactNode[]>((prev, cur, index, list) => {
        console.log(cur.trim());
        const text = cur.trim() + (index < list.length - 1 ? '),' : '');
        return [
          ...prev,
          <p key={index}>
            {text}
          </p>
        ]
      }, []);
  }

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
                  <div css={styles.info}>
                    {boxShadowInfo.name}
                    {boxShadowInfo.desc && (
                      <Tooltip title={boxShadowInfo.desc}>
                        <InfoCircleOutlined />
                      </Tooltip>
                    )}
                    <div css={styles.name}>
                      {boxShadowKey}
                    </div>
                  </div>
                  <div css={styles.value}>
                    {getBoxShadowDom(token[boxShadowKey])}
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
