import { G2 } from '@ant-design/plots';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';

export function Dark(): G2Theme {
  const theme = G2.Dark();

  return {
    ...theme,
  };
}
