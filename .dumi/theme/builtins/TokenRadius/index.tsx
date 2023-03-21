import React from 'react';
import { message, Tooltip } from 'antd';
import { css } from '@emotion/react';
import InfoCircleOutlined from '@sensoro-design/icons/InfoCircleOutlined';
import CopyToClipboard from 'react-copy-to-clipboard';
import tokenMeta from 'sensoro-design/es/version/token-meta.json';
import { useSiteToken } from '../../../hooks/useSiteToken';


const radiusMap = {
  borderRadiusSM: {
    ...tokenMeta['borderRadiusSM']
  },
  borderRadiusXS: {
    ...tokenMeta['borderRadiusXS']
  },
  borderRadiusLG: {
    ...tokenMeta['borderRadiusLG']
  }
};

export const useStyle = () => {
  const { token } = useSiteToken();

  return {
    container: css({
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch',
      justifyItems: 'flex-start',
      boxSizing: 'border-box',
      width: '100%',
      cursor: 'pointer',
    }),
    item: css({
      flex: 1,
      minWidth: 0,
      padding: token.paddingXS,
    }),
    name: css({
      marginBottom: token.marginXS,

      '> span': {
        marginLeft: token.marginXXS,
      },
    }),
    value: css({
      display: 'inline-block',
      padding: `${token.paddingXXS}px ${token.paddingXS}px`,
      marginBottom: token.marginXS,
      background: token.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      fontSize: 12
    }),
    radius: css({
      height: 40,
      width: '70%',
      border: `1px ${token.lineType} ${token.colorBorder}`
    }),
  }
}

const TokenRadius: React.FC = () => {
  const { token } = useSiteToken();
  const styles = useStyle();

  return (
    <div css={styles.container}>
      {(Object.keys(radiusMap)).map((radiusKey) => {
        const radiusInfo = radiusMap[radiusKey];

        return (
          <CopyToClipboard
            text={radiusKey}
            onCopy={() => message.success(`copied: ${radiusKey}`)}
            key={radiusKey}
          >
            <div css={styles.item}>
              <div css={styles.name}>
                {radiusInfo.name}
                {radiusInfo.desc && (
                  <Tooltip title={radiusInfo.desc}>
                    <InfoCircleOutlined />
                  </Tooltip>
                )}
              </div>
              <div css={styles.value}>
                {radiusKey}: {token[radiusKey]}
              </div>
              <div css={styles.radius} style={{ borderRadius: token[radiusKey] }} />
            </div>
          </CopyToClipboard>
        )
      })}
    </div>
  )
}

export default TokenRadius;
