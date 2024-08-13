import { Dark as G2Dark } from '@antv/g2';
import { deepMix } from '@antv/util';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';

export function Dark() {
  const defaultTheme = G2Dark();

  const customTheme: G2Theme = {
    view: {
      viewFill: 'red',
    },
  };

  const theme = deepMix({}, defaultTheme, customTheme);

  return theme;
}
