import { genComponentStyleHook } from '../../theme/internal';

import type { FullToken } from '../../theme/internal';

/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {}

export interface ButtonToken extends FullToken<'Button'> {
  buttonPaddingHorizontal: number;
}

// ============================== Export ==============================
export default genComponentStyleHook('Button', () => {
  return [

  ];
});
