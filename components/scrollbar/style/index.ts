import { genComponentStyleHook, mergeToken } from '../../theme/internal';

import type { FullToken, GenerateStyle } from '../../theme/internal';

export interface ComponentToken {}

interface ScrollbarToken extends FullToken<'Scrollbar'> {
  scrollbaeTrackSize: number;
  scrollbarPadding: number;
  scrollbaeTrackSizeSM: number;
  scrollbarPaddingSM: number;
}

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

export const getBarStyle: GenerateStyle<ScrollbarToken> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-bar`]: {
      position: 'absolute',
      padding: token.scrollbarPadding,
      right: 0,
      bottom: 0,
      zIndex: 1,

      [`&${componentCls}-bar-horizontal`]: {
        left: 0,
        height: token.scrollbaeTrackSize,

        '> div': {
          height: '100%',
        }
      },

      [`&${componentCls}-bar-vertical`]: {
        top: 0,
        width: token.scrollbaeTrackSize,

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
    [`${componentCls}-small ${componentCls}-bar`]: {
      [`&${componentCls}-bar-horizontal`]: {
        height: token.scrollbaeTrackSizeSM,
      },
      [`&${componentCls}-bar-vertical`]: {
        width: token.scrollbaeTrackSizeSM,
      },
    }
  }
}

// ============================== Export ==============================
export default genComponentStyleHook('Radio', (token) => {
  const scrollbarToken: ScrollbarToken = mergeToken<ScrollbarToken>(token, {
    scrollbaeTrackSize: 16,
    scrollbarPadding: 4,
    scrollbaeTrackSizeSM: 12,
    scrollbarPaddingSM: 4,
  });

  return [
    genScrollbarStyle(scrollbarToken),
    getBarStyle(scrollbarToken),
  ]
});
