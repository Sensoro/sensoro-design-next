import { generate } from '@ant-design/colors';
import type { GenerateColorMap, GenerateNeutralColorMap } from '../ColorMap';
import { getAlphaColor, getSolidColor } from './colorAlgorithm';

export const generateColorPalettes: GenerateColorMap = (baseColor: string) => {
  const colors = generate(baseColor);
  return {
    1: colors[0],
    2: colors[1],
    3: colors[2],
    4: colors[3],
    5: colors[4],
    6: colors[5],
    7: colors[6],
    8: colors[4],
    9: colors[5],
    10: colors[6],
  };
};

export const generateNeutralColorPalettes: GenerateNeutralColorMap = (
  bgBaseColor: string,
  textBaseColor: string,
) => {
  const colorBgBase = bgBaseColor || '#fff';
  const colorTextBase = textBaseColor || '#0a1b39';

  return {
    colorBgBase,
    colorTextBase,

    colorText: getAlphaColor(colorTextBase, 1),
    colorTextSecondary: getAlphaColor(colorTextBase, 0.8),
    colorTextTertiary: getAlphaColor(colorTextBase, 0.6),
    colorTextQuaternary: getAlphaColor(colorTextBase, 0.35),
    colorTextDisabled: getAlphaColor(colorTextBase, 0.35),

    colorFill: getAlphaColor(colorTextBase, 0.15),
    colorFillSecondary: getAlphaColor(colorTextBase, 0.08),
    colorFillTertiary: getAlphaColor(colorTextBase, 0.04),
    colorFillQuaternary: getAlphaColor(colorTextBase, 0.02),
    colorFillDisabled: getAlphaColor(colorTextBase, 0.04),

    colorBgContainer: getAlphaColor(colorTextBase, 0.02),
    colorBgContainerSecondary: getAlphaColor(colorTextBase, 0.04),

    colorBgLayout: getSolidColor(colorBgBase, 4),
    colorBgElevated: getSolidColor(colorBgBase, 0),
    colorBgSpotlight: getAlphaColor(colorTextBase, 0.85),

    colorBorder: getAlphaColor(colorTextBase, 0.08),
    colorBorderSecondary: getSolidColor(colorBgBase, 6),
    colorBorderDashed: getAlphaColor(colorTextBase, 0.15),

    colorScrollbar: getAlphaColor(colorTextBase, 0.25),
    colorScrollbarHover: getAlphaColor(colorTextBase, 0.35),
  };
};
