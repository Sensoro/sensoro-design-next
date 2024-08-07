import { G2 } from '@ant-design/plots';
import { deepMix } from '@antv/util';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';
import {
  Blue04,
  Category1,
  Category2,
  Grey03,
  Grey04,
  Grey06,
  Grey08,
  Grey09,
  Grey10,
  Red06,
} from '../config';

export function Light() {
  const defaultTheme = G2.Light();

  const customTheme: G2Theme = {
    margin: 24,
    category10: Category1,
    category20: Category2,
    /** 分类图例 */
    legendCategory: {
      itemLabelFill: Grey08,
      itemLabelFillOpacity: 1,
      itemLabelFontSize: 12,
    },
    title: {
      /** 主标题、副标题之间的上下间距 */
      spacing: 16,
      /** 标题文字大小 */
      titleFontSize: 16,
      /** 标题字体粗细 */
      titleFontWeight: 500,
      /** 标题字体颜色 */
      titleFill: Grey10,
      /** 副标题文字大小 */
      subtitleFontSize: 12,
      /** 副标题字体颜色 */
      subtitleFill: Grey08,
    },
    line: {
      line: {
        lineWidth: 2,
      },
    },
    axis: {
      // Line
      lineStroke: Grey04,
      lineStrokeOpacity: 1,

      // Tick
      tickLength: 4,
      tickStroke: Grey04,
      tickOpacity: 1,

      // Grid
      gridStroke: Grey03,
      gridStrokeOpacity: 1,
      gridLineDash: [3, 2],

      // Label
      labelFontSize: 12,
      labelFill: Grey06,
      labelOpacity: 1,
      labelSpacing: 8,
    },
    tooltip: {
      crosshairsStroke: Blue04,
      crosshairsLineDash: [3, 2],
      css: {
        '.g2-tooltip': {
          boxShadow: 'none',
          background: Grey09,
          opacity: 1,
          padding: '12px 12px 8px',
        },
        '.g2-tooltip-title': {
          color: Grey06,
          fontSize: 12,
          lineHeight: '20px',
          margin: '0 0 4px',
        },
        '.g2-tooltip-list-item-name-label': {
          color: '#fff',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          fontWeight: 400,
        },
        '.g2-tooltip-list-item-value': {
          color: '#fff',
          fontFamily: 'DIN Alternate',
          marginLeft: '16px',
          textAlign: 'right',
        },
      },
    },

    lineY: {
      line: {
        stroke: Red06,
        strokeOpacity: 1,
        lineWidth: 1,
        lineDash: [3, 2],
      },
    },
  };

  const theme = deepMix({}, defaultTheme, customTheme);

  return theme;
}
