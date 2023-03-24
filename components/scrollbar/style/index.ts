import { genComponentStyleHook, mergeToken } from '../../theme/internal';

import type { FullToken, GenerateStyle } from '../../theme/internal';

export interface ComponentToken {}

interface ScrollbarToken extends FullToken<'Scrollbar'> {}

// ============================== Styles ==============================
export const genScrollbarStyle: GenerateStyle<ScrollbarToken> = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      position: 'relative',
      overflow: 'hidden',
      height: '100%',

      [`${componentCls}-wrap`]: {
        overflow: 'auto',
        height: '100%',
      },

      [`${componentCls}-wrap-hidden`]: {
        scrollbarWidth: 'none',

        [`&::-webkit-scrollbar`]: {
          display: 'none',
        }
      }
    }
  }
}

export const getThumbStyle: GenerateStyle<ScrollbarToken> = (token) => {
  const { componentCls } = token;
  return {
    [`${componentCls}-bar`]: {
      position: 'absolute',
      right: 2,
      bottom: 2,
      zIndex: 1,

      [`&${componentCls}-bar-horizontal`]: {
        height: 6,
        left: 2,

        '> div': {
          height: '100%',
        }
      },

      [`&${componentCls}-bar-vertical`]: {
        width: 6,
        top: 2,

        '> div': {
          width: '100%',
        }
      },

      [`${componentCls}-thumb`]: {
        position: 'relative',
        display: 'block',
        width: 0,
        height: 0,
        cursor: 'pointer',
        borderRadius: token.borderRadiusXS,
        backgroundColor: token.colorScrollbar,

        '&:hover,&:active': {
          backgroundColor: token.colorScrollbarHover,
        }
      }
    },
  }
}

// ============================== Export ==============================
export default genComponentStyleHook('Radio', (token) => {
  const scrollbarToken: ScrollbarToken = mergeToken<ScrollbarToken>(token, {});

  return [
    genScrollbarStyle(scrollbarToken),
    getThumbStyle(scrollbarToken),
  ]
});
