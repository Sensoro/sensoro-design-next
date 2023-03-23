import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';

import type { FullToken, GenerateStyle } from '../../theme/internal';

export interface ComponentToken {}

interface RadioToken extends FullToken<'Radio'> {
  radioCls: string;
  radioSize: number;
}

// ============================== Styles ==============================
export const genRadioStyle: GenerateStyle<RadioToken> = (token) => {
  const { radioCls } = token;
  const wrapperCls = `${radioCls}-wrapper`;

  return [
    {
      // Group
      [`${radioCls}-group`]: {
        ...resetComponent(token),

        display: 'inline-flex',
      },

      // Wrapper
      [wrapperCls]: {
        ...resetComponent(token),

        display: 'inline-flex',
        alignItems: 'baseline',
        cursor: 'pointer',
      }
    },
  ];
}


// ============================== Export ==============================
export default genComponentStyleHook('Radio', (token, { prefixCls }) => {
  const radioToken: RadioToken = mergeToken<RadioToken>(token, {
    radioCls: `.${prefixCls}`,
    radioSize: token.controlInteractiveSize,
  });

  return [
    genRadioStyle(radioToken),
  ]
});
