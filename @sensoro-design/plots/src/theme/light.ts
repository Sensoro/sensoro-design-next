import { Light as G2Light } from '@antv/g2';
import { deepMix } from '@antv/util';
import type { G2Theme } from '@antv/g2/esm/runtime/types/theme';
import {
  category10,
  category20,
  colorBlue04,
  colorGrey03,
  colorGrey04,
  colorGrey06,
  colorGrey08,
  colorGrey09,
  colorGrey10,
  colorRed06,
} from '../config';

export function Light() {
  const defaultTheme = G2Light();

  const customTheme: G2Theme = {
    margin: 24,
    category10,
    category20,
    /** 分类图例 */
    legendCategory: {
      itemLabelFill: colorGrey08,
      itemLabelFillOpacity: 1,
      itemLabelFontSize: 12,
      itemSpacing: 8,
      colPadding: 24,
    },
    title: {
      /** 主标题、副标题之间的上下间距 */
      spacing: 16,
      /** 标题文字大小 */
      titleFontSize: 16,
      /** 标题字体粗细 */
      titleFontWeight: 500,
      /** 标题字体颜色 */
      titleFill: colorGrey10,
      /** 标题透明度 */
      titleFillOpacity: 1,
      /** 副标题文字大小 */
      subtitleFontSize: 12,
      /** 副标题字体颜色 */
      subtitleFill: colorGrey08,
    },
    line: {
      line: {
        lineWidth: 2,
      },
    },
    axis: {
      // Line
      lineStroke: colorGrey04,
      lineStrokeOpacity: 1,

      // Tick
      tickLength: 4,
      tickStroke: colorGrey04,
      tickOpacity: 1,

      // Grid
      gridStroke: colorGrey03,
      gridStrokeOpacity: 1,
      gridLineDash: [3, 2],

      // Label
      labelFontSize: 12,
      labelFill: colorGrey06,
      labelOpacity: 1,
      labelSpacing: 8,
    },
    axisY: {
      tick: false,
    },
    tooltip: {
      crosshairsStroke: colorBlue04,
      crosshairsLineDash: [3, 2],
      crosshairsStrokeOpacity: 1,
      css: {
        '.g2-tooltip': {
          'box-shadow': 'none',
          'background': colorGrey10,
          'opacity': 0.8,
          'padding': '12px 12px 8px',
        },
        '.g2-tooltip-title': {
          color: colorGrey06,
          margin: '0 0 4px',
        },
        '.g2-tooltip-list-item': {
          'line-height': '20px',
          'margin-bottom': '4px',
        },
        '.g2-tooltip-list-item-name-label': {
          color: '#fff',
        },
        '.g2-tooltip-list-item-value': {
          'color': '#fff',
          'font-family': 'DINAlternate-Bold',
          'margin-left': '16px',
        },
        '.g2-tooltip-list-item-marker': {
          'border-radius': '1px',
          'margin-right': '8px',
        },
      },
    },
    lineY: {
      line: {
        stroke: colorRed06,
        strokeOpacity: 1,
        lineWidth: 1,
        lineDash: [3, 2],
      },
    },
  };

  const theme = deepMix({}, defaultTheme, customTheme);

  return theme;
}
