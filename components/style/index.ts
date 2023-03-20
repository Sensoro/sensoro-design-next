import type { CSSObject } from '@ant-design/cssinjs';
import type { AliasToken } from '../theme/internal';

export const textEllipsis: CSSObject = {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
};

export const resetComponent = (token: AliasToken): CSSObject => ({
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
  color: token.colorText,
  fontSize: token.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: token.lineHeight,
  listStyle: 'none',
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: token.fontFamily,
});

export const genCommonStyle = (token: any, componentPrefixCls: string): CSSObject => {
  const { fontFamily, fontSize } = token;

  const rootPrefixSelector = `[class^="${componentPrefixCls}"], [class*=" ${componentPrefixCls}"]`;

  return {
    [rootPrefixSelector]: {
      fontFamily,
      fontSize,
      boxSizing: 'border-box',

      '&::before, &::after': {
        boxSizing: 'border-box',
      },

      [rootPrefixSelector]: {
        boxSizing: 'border-box',

        '&::before, &::after': {
          boxSizing: 'border-box',
        },
      },
    },
  };
}

export const genFocusOutline = (token: AliasToken): CSSObject => ({
  outline: `${token.lineWidthFocus}px solid ${token.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: 'outline-offset 0s, outline 0s',
});

export const genFocusStyle = (token: AliasToken): CSSObject => ({
  '&:focus-visible': {
    ...genFocusOutline(token),
  },
});
