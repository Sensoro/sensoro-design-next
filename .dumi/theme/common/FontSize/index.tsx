import React from 'react';
import { css } from '@emotion/react';
import { Space } from 'sensoro-design';
import { genFontSizes } from 'sensoro-design/es/theme/themes/shared/genFontSizes';
import { useSiteToken } from '../../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    title: css({
      fontWeight: token.fontWeightXL,
      backgroundColor: token.colorBgContainerActive,
    }),
    item: css({
      height: 56,
      width: 76,
      lineHeight: '56px',
      textAlign: 'center',
      backgroundColor: token.colorBgContainer
    }),
  };
}

export const FontSize: React.FC = () => {
  const { token } = useSiteToken();
  const styles = useStyle();
  const fontSize = token.fontSize || 14;
  const fontSizePairs = genFontSizes(fontSize);

  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => Math.floor(pair.lineHeight * pair.size));

  return (
    <Space direction="vertical">
      <Space>
        <div css={[styles.title, styles.item]}>
          字号
        </div>
        {fontSizes.map((size) => (
          <div css={styles.item}>
            {size}
          </div>
        ))}
      </Space>
      <Space >
        <div css={[styles.title, styles.item]}>
          行高
        </div>
        {lineHeights.map((lineHeight) => (
          <div css={styles.item}>
            {lineHeight}
          </div>
        ))}
      </Space>
    </Space>
  );
}

export default FontSize;
