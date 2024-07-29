import { colorGrey07, colorGrey10 } from '../../config/colors';

export function getAnnotations(count: number | string, text: string) {
  return [
    {
      type: 'text',
      style: {
        text: `${count}`,
        x: '50%',
        y: '50%',
        dy: -10,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 24,
        fontFamily: 'DINAlternate-Bold',
        fill: colorGrey10,
      },
    },
    {
      type: 'text',
      style: {
        text,
        x: '50%',
        y: '50%',
        dy: 10,
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 12,
        fill: colorGrey07,
      },
    },
  ];
}
