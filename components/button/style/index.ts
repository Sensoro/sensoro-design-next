import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { genFocusStyle } from '../../style';

import type { FullToken, GenerateStyle, } from '../../theme/internal';
import type { CSSObject, CSSInterpolation } from '@ant-design/cssinjs';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {}

export interface ButtonToken extends FullToken<'Button'> {
  colorOutlineDefault: string;
  buttonPaddingHorizontal: number;
  buttonColorBg: string;
  buttonColorBgHover: string;
  buttonColorBgActive: string;
}

// ============================== Shared ==============================
const genSharedButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token): CSSObject => {
  const { componentCls, iconCls } = token;

  return {
    [componentCls]: {
      outline: 'none',
      position: 'relative',
      display: 'inline-block',
      fontWeight: 400,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundImage: 'none',
      backgroundColor: 'transparent',
      border: `${token.lineWidth}px ${token.lineType} transparent`,
      cursor: 'pointer',
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
      userSelect: 'none',
      touchAction: 'manipulation',
      lineHeight: token.lineHeight,
      color: token.colorText,

      '> span': {
        display: 'inline-block',
      },

      // Leave a space between icon and text.
      [`> ${iconCls} + span, > span + ${iconCls}`]: {
        marginInlineStart: token.marginXS,
      },

      '> a': {
        color: 'currentColor',
      },

      '&:not(:disabled)': {
        ...genFocusStyle(token),
      },
    }
  }
}

const genHoverActiveButtonStyle = (hoverStyle: CSSObject, activeStyle: CSSObject): CSSObject => ({
  '&:not(:disabled)': {
    '&:hover': hoverStyle,
    '&:active': activeStyle,
  },
});

// ============================== Shape ===============================
const genCircleButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  minWidth: token.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: token.borderRadiusCircle,
});

const genRoundButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  borderRadius: token.controlHeight,
  paddingInlineStart: token.controlHeight / 2,
  paddingInlineEnd: token.controlHeight / 2,
});

// ============================== Type ===============================
const genDisabledStyle = (token: ButtonToken, disabledStyle?: CSSObject): CSSObject => ({
  cursor: 'not-allowed',
  borderColor: token.colorBorder,
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  boxShadow: 'none',
  ...disabledStyle,
});

const genPureDisabledButtonStyle = (token: ButtonToken, disabledStyle?: CSSObject): CSSObject => ({
  '&:disabled': {
    cursor: 'not-allowed',
    color: token.colorTextDisabled,
    ...disabledStyle,
  },
});

const genSolidDisabledButtonStyle: GenerateStyle<ButtonToken, CSSObject> = () => ({
  '&:disabled': {
    // ...genDisabledStyle(token),
  },
});

const genSolidButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  ...genSolidDisabledButtonStyle(token),
});

// Type: Default
const genDefaultButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBgContainer,

  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,

  ...genHoverActiveButtonStyle(
    {
      backgroundColor: token.buttonColorBgHover,
      borderColor: token.buttonColorBgHover,
    },
    {
      backgroundColor: token.buttonColorBgActive,
      borderColor: token.buttonColorBgActive,
    },
  ),

  '&:disabled': {
    ...genDisabledStyle(token, {
      color: token.colorTextDisabled,
      borderColor: token.colorBgContainerDisabled,
      backgroundColor: token.colorBgContainerDisabled,
    }),
  },
});

// Type: Dashed
const genDashedButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  backgroundColor: token.colorBgContainer,
  borderColor: token.colorBorderDashed,
  borderStyle: 'dashed',

  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlTmpOutline}`,

  ...genHoverActiveButtonStyle(
    {
      backgroundColor: token.buttonColorBgHover,
    },
    {
      backgroundColor: token.buttonColorBgActive,
    },
  ),

  '&:disabled': {
    ...genDisabledStyle(token, {
      color: token.colorTextDisabled,
      backgroundColor: token.colorBgContainerDisabled,
    }),
  },
});

// Type: Link
const genLinkButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  color: token.colorLink,

  ...genHoverActiveButtonStyle(
    {
      color: token.colorLinkHover,
    },
    {
      color: token.colorLinkActive,
    },
  ),

  ...genPureDisabledButtonStyle(token, {
    color: token.colorLinkDisabled
  }),
})

// Type: Primary
const genPrimaryButtonStyle: GenerateStyle<ButtonToken, CSSObject> = (token) => ({
  ...genSolidButtonStyle(token),

  color: token.colorTextLightSolid,
  backgroundColor: token.colorPrimary,

  boxShadow: `0 ${token.controlOutlineWidth}px 0 ${token.controlOutline}`,

  ...genHoverActiveButtonStyle(
    {
      color: token.colorTextLightSolid,
      backgroundColor: token.colorPrimaryHover,
    },
    {
      color: token.colorTextLightSolid,
      backgroundColor: token.colorPrimaryActive,
    },
  ),

  '&:disabled': {
    ...genDisabledStyle(token, {
      color: token.colorWhite,
      borderColor: token.colorPrimaryDisabled,
      backgroundColor: token.colorPrimaryDisabled,
    }),
  },
})

const genTypeButtonStyle: GenerateStyle<ButtonToken> = (token) => {
  const { componentCls } = token;

  return {
    [`${componentCls}-default`]: genDefaultButtonStyle(token),
    [`${componentCls}-primary`]: genPrimaryButtonStyle(token),
    [`${componentCls}-dashed`]: genDashedButtonStyle(token),
    [`${componentCls}-link`]: genLinkButtonStyle(token),
  };
}

// =============================== Size ===============================
const genSizeButtonStyle = (token: ButtonToken, sizePrefixCls: string = ''): CSSInterpolation => {
  const {
    componentCls,
    iconCls,
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    borderRadius,
    buttonPaddingHorizontal,
  } = token;

  const paddingVertical = Math.max(0, (controlHeight - fontSize * lineHeight) / 2 - lineWidth);
  const paddingHorizontal = buttonPaddingHorizontal - lineWidth;

  const iconOnlyCls = `${componentCls}-icon-only`;

  return [
    // Size
    {
      [`${componentCls}${sizePrefixCls}`]: {
        fontSize,
        height: controlHeight,
        padding: `${paddingVertical}px ${paddingHorizontal}px`,
        borderRadius,

        [`&${iconOnlyCls}`]: {
          width: controlHeight,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,

          [`&${componentCls}-round`]: {
            width: 'auto',
          },

          '> span': {
            transform: 'scale(1.143)', // 14px -> 16px
          },
        },

        // Loading
        [`&${componentCls}-loading`]: {
          opacity: token.opacityLoading,
          cursor: 'default',
        },

        [`${componentCls}-loading-icon`]: {
          transition: `width ${token.motionDurationSlow} ${token.motionEaseInOut}, opacity ${token.motionDurationSlow} ${token.motionEaseInOut}`,
        },

        [`&:not(${iconOnlyCls}) ${componentCls}-loading-icon > ${iconCls}`]: {
          marginInlineEnd: token.marginXS,
        },
      },
    },

    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${componentCls}${componentCls}-circle${sizePrefixCls}`]: genCircleButtonStyle(token),
    },
    {
      [`${componentCls}${componentCls}-round${sizePrefixCls}`]: genRoundButtonStyle(token),
    },
  ]
}

const genSizeBaseButtonStyle: GenerateStyle<ButtonToken> = (token) => genSizeButtonStyle(token);

// ============================== Block ==============================
const genBlockButtonStyle: GenerateStyle<ButtonToken> = (token) => {
  const { componentCls } = token;
  return {
    [componentCls]: {
      [`&${componentCls}-block`]: {
        width: '100%',
      },
    },
  };
};

// ============================== Export ==============================
export default genComponentStyleHook('Button', (token) => {
  const { controlTmpOutline, paddingContentHorizontal } = token;

  const buttonToken = mergeToken<ButtonToken>(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal,
    buttonColorBg: token.colorFillTertiary,
    buttonColorBgHover: token.colorFillSecondary,
    buttonColorBgActive: token.colorFill,
  });

  return [
    // Shared
    genSharedButtonStyle(buttonToken),

    // Size
    genSizeBaseButtonStyle(buttonToken),

    // Block
    genBlockButtonStyle(buttonToken),

    // Group (type, ghost, danger, disabled, loading)
    genTypeButtonStyle(buttonToken),
  ];
});
