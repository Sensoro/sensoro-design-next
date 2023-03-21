import { genComponentStyleHook, mergeToken } from '../../theme/internal';
import { resetComponent } from '../../style';

import type { FullToken, GenerateStyle } from '../../theme/internal';

export interface ComponentToken {}

interface CheckboxToken extends FullToken<'Checkbox'> {
  checkboxCls: string;
  checkboxSize: number;
}

// ============================== Styles ==============================
export const genCheckboxStyle: GenerateStyle<CheckboxToken> = (token) => {
  const { checkboxCls } = token;
  const wrapperCls = `${checkboxCls}-wrapper`;

  return [
    {
      // Group
      [`${checkboxCls}-group`]: {
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
export default genComponentStyleHook('Checkbox', (token, { prefixCls }) => {
  const checkboxToken: CheckboxToken = mergeToken<CheckboxToken>(token, {
    checkboxCls: `.${prefixCls}`,
    checkboxSize: token.controlInteractiveSize,
  });

  return [
    genCheckboxStyle(checkboxToken),
  ]
});
