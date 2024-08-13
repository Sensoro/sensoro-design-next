import { colorGrey02, colorGrey10 } from '../../config/colors';
import type { MarkBackgroundConfig } from './types';

export const getDefaultMarkBackgroundConfig: (
  yField: string,
) => MarkBackgroundConfig = (yField: string) => ({
  label: {
    text: ({ originData }: { originData: any }) => {
      return `${originData[yField]}`;
    },
    position: 'right',
    dx: 44,
    dy: 0,
    style: {
      fill: colorGrey10,
      fillOpacity: 1,
      fontSize: 14,
      fontFamily: 'DINAlternate-Bold',
      lineHeight: 14,
    },
  },
  style: {
    fill: colorGrey02,
  },
});
