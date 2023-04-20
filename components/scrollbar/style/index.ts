import { genComponentStyleHook, mergeToken } from '../../theme/internal';

import type { FullToken, GenerateStyle } from '../../theme/internal';

export interface ComponentToken {}

interface ScrollbarToken extends FullToken<'Scrollbar'> {
  scrollbarTrackSize: number;
  scrollbarPadding: number;
  scrollbarTrackSizeSM: number;
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

      [`${componentCls}-wrap-native-hidden`]: {
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
        height: token.scrollbarTrackSize,

        '> div': {
          height: '100%',
        }
      },

      [`&${componentCls}-bar-vertical`]: {
        top: 0,
        width: token.scrollbarTrackSize,

        '> div': {
          width: '100%',
        }
      },

      [`${componentCls}-bar-thumb`]: {
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
        height: token.scrollbarTrackSizeSM,
      },
      [`&${componentCls}-bar-vertical`]: {
        width: token.scrollbarTrackSizeSM,
      },
    }
  }
}

// ============================== Export ==============================
export default genComponentStyleHook('Radio', (token) => {
  const scrollbarToken: ScrollbarToken = mergeToken<ScrollbarToken>(token, {
    scrollbarTrackSize: 16,
    scrollbarPadding: 4,
    scrollbarTrackSizeSM: 12,
    scrollbarPaddingSM: 4,
  });

  return [
    genScrollbarStyle(scrollbarToken),
    getBarStyle(scrollbarToken),
  ]
});
