import { G2 } from '@ant-design/plots';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';

export function Light(): G2Theme {
  const theme = G2.Light();

  return {
    ...theme,
  };
}
