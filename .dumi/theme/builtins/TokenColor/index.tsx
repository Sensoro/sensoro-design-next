import React from 'react';
import { message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useSiteToken } from '../../../hooks/useSiteToken';
import { useStyle } from './style';

type ColorType = 'primary' | 'success' | 'error' | 'warning' | 'info' | 'link';

interface TokenColorProps {
  type: ColorType;
};

export const colorConfig: Record<ColorType, { token: string; desc: string }[]> = {
  primary: [
    {
      token: 'colorPrimary',
      desc: '常规',
    },
    {
      token: 'colorPrimaryHover',
      desc: '悬浮',
    },
    {
      token: 'colorPrimaryActive',
      desc: '点击',
    },
    {
      token: 'colorPrimaryDisabled',
      desc: '禁用',
    },
    {
      token: 'colorPrimaryBg',
      desc: '背景',
    },
  ],
  success: [
    {
      token: 'colorSuccess',
      desc: '常规',
    },
    {
      token: 'colorSuccessHover',
      desc: '悬浮',
    },
    {
      token: 'colorSuccessActive',
      desc: '点击',
    },
    {
      token: 'colorSuccessDisabled',
      desc: '禁用',
    },
    {
      token: 'colorSuccessBg',
      desc: '背景',
    },
  ],
  error: [
    {
      token: 'colorError',
      desc: '常规',
    },
    {
      token: 'colorErrorHover',
      desc: '悬浮',
    },
    {
      token: 'colorErrorActive',
      desc: '点击',
    },
    {
      token: 'colorErrorDisabled',
      desc: '禁用',
    },
    {
      token: 'colorErrorBg',
      desc: '背景',
    },
  ],
  warning: [
    {
      token: 'colorWarning',
      desc: '常规',
    },
    {
      token: 'colorWarningHover',
      desc: '悬浮',
    },
    {
      token: 'colorWarningActive',
      desc: '点击',
    },
    {
      token: 'colorWarningDisabled',
      desc: '禁用',
    },
    {
      token: 'colorWarningBg',
      desc: '背景',
    },
  ],
  info: [
    {
      token: 'colorInfo',
      desc: '常规',
    },
    {
      token: 'colorInfoHover',
      desc: '悬浮',
    },
    {
      token: 'colorInfoActive',
      desc: '点击',
    },
    {
      token: 'colorInfoDisabled',
      desc: '禁用',
    },
    {
      token: 'colorInfoBg',
      desc: '背景',
    },
  ],
  link: [
    {
      token: 'colorLink',
      desc: '常规',
    },
    {
      token: 'colorLinkHover',
      desc: '悬浮',
    },
    {
      token: 'colorLinkActive',
      desc: '点击',
    },
    {
      token: 'colorLinkDisabled',
      desc: '禁用',
    },
  ],
};

const TokenColor: React.FC<TokenColorProps> = (props) => {
  const { type } = props;
  const styles = useStyle();
  const { token } = useSiteToken();

  const colors = colorConfig[type] || [];

  return (
    <div css={styles.tokenColor}>
      {colors.map(color => {
        return (
          <CopyToClipboard
            text={color.token}
            onCopy={() => message.success(`@${color.token} copied: ${token[color.token]}`)}
            key={color.token}
          >
            <div css={styles.item}>
              <div
                css={styles.color}
                style={{
                  background: token[color.token]
                }}
              />
              <div css={styles.info}>
                <span>
                  {color.token}
                </span>
                <span>
                {color.desc}
                </span>
              </div>
            </div>
          </CopyToClipboard>
        )
      })}
    </div>
  );
}

export default TokenColor;
