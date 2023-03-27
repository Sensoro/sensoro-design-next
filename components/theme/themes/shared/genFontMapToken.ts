import type { FontMapToken } from '../../interface';
import { genFontSizes } from './genFontSizes';

export const genFontMapToken = (fontSize: number): FontMapToken => {
  const fontSizePairs = genFontSizes(fontSize);

  const fontSizes = fontSizePairs.map((pair) => pair.size);
  const lineHeights = fontSizePairs.map((pair) => pair.lineHeight);

  return {
    fontSizeSM: fontSizes[0],
    fontSize: fontSizes[1],
    fontSizeLG: fontSizes[2],
    fontSizeXL: fontSizes[3],

    fontSizeHeading1: fontSizes[4],
    fontSizeHeading2: fontSizes[2],
    fontSizeHeading3: fontSizes[1],

    lineHeightSM: lineHeights[0],
    lineHeight: lineHeights[1],
    lineHeightLG: lineHeights[2],
    lineHeightXL: lineHeights[3],

    lineHeightHeading1: lineHeights[4],
    lineHeightHeading2: lineHeights[2],
    lineHeightHeading3: lineHeights[1],

    fontWeightSM: 300,
    fontWeight: 400,
    fontWeightLG: 500,
    fontWeightXL: 600,
  };
};
