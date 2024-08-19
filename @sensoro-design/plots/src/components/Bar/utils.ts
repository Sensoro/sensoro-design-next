import { colorGrey02, colorGrey10 } from '../../config/colors';
import type { MarkBackgroundConfig } from './types';

export const getDefaultMarkBackgroundConfig: (
  yField: string,
) => MarkBackgroundConfig = (yField: string) => ({
  label: {
    text: ({ originData }: { originData: any }) => {
      return `${originData[yField]}`;
    },
    position: 'left',
    // TODO 需要再charts中抹平dx和数据值的位数关系:图表宽度 - 图表内部左右padding（默认24） - 图表左侧x轴label宽度（默认110 || 0） - 值距离条形图的距离（默认16）
    dx: 0,
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
