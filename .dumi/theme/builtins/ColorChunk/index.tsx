import React, { useMemo } from 'react';
import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import { css } from '@emotion/react';
import { useSiteToken } from '../../../hooks/useSiteToken';

interface ColorChunkProps {
  children?: React.ReactNode;
  color?: ColorInput;
}

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    codeSpan: css({
      padding: '0.2em 0.4em',
      fontSize: '0.9em',
      background: token.siteMarkdownCodeBg,
      borderRadius: token.borderRadius,
      fontFamily: 'monospace',
    }),
    dot: css({
      display: 'inline-block',
      width: 8,
      height: 8,
      borderRadius: token.borderRadiusLG,
      marginInlineEnd: 4,
    }),
  };
};

const ColorChunk: React.FC<ColorChunkProps> = (props) => {
  const styles = useStyle();
  const { color, children } = props;

  const dotColor = useMemo(() => {
    const _color = new TinyColor(color).toHex8String();
    return _color.endsWith('ff') ? _color.slice(0, -2) : _color;
  }, [color]);

  return (
    <span css={styles.codeSpan}>
      <span css={styles.dot} style={{ backgroundColor: dotColor }} />
      {children ?? dotColor}
    </span>
  );
}

export default ColorChunk;
