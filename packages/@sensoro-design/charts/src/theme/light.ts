import { G2 } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';

export function Light() {
  const defaultTheme = G2.Light();

  const customTheme: G2Theme = {
    view: {
      viewFill: 'green',
    },
  };

  const theme = deepMix({}, defaultTheme, customTheme);

  return theme;
}
