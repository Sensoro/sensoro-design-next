import { G2 } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';

export function Light() {
  const defaultTheme = G2.Light();

  const customTheme: G2Theme = {
    margin: 24,
    title: {
      /** 主标题、副标题之间的上下间距 */
      spacing: 16,
      /** 标题文字大小 */
      titleFontSize: 16,
      /** 标题字体粗细 */
      titleFontWeight: 500,
      /** 标题字体颜色 */
      titleFill: '#0a1b39',
      /** 副标题文字大小 */
      subtitleFontSize: 12,
      /** 副标题字体颜色 */
      subtitleFill: '#6d7789',
    },
    axis: {
      // Line
      lineStroke: '#eceef0',
      lineStrokeOpacity: 1,

      // Tick
      tickLength: 4,
      tickStroke: '#eceef0',
      tickOpacity: 1,

      // Grid
      gridStroke: '#f1f2f4',
      gridStrokeOpacity: 1,
      gridLineDash: [3, 2],
    },
  };

  const theme = deepMix({}, defaultTheme, customTheme);

  return theme;
}
