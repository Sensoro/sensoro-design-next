import type { SymbolFactor } from '@antv/g2';

export const hyphenPoint = Object.assign<SymbolFactor, Partial<SymbolFactor>>(
  (x, y, r) => {
    const segment = r / 10;
    const radius1 = segment * 1.25;
    const radius2 = segment * 2.5;
    const radius3 = segment * 1.5;
    const len = 2.168;

    return [
      ['M', segment * 3.75, -segment * 1.25],
      ['L', segment * len, -segment * 1.25],
      ['A', radius2, radius2, 0, 0, 0, -segment * len, -segment * 1.25],
      ['L', -segment * 3.75, -segment * 1.25],
      ['A', radius1, radius1, 0, 0, 0, -segment * 3.75, segment * 1.25],
      ['L', -segment * len, segment * 1.25],
      ['A', radius2, radius2, 0, 0, 0, segment * len, segment * 1.25],
      ['L', segment * 3.75, segment * 1.25],
      ['A', radius1, radius1, 0, 0, 0, segment * 3.75, -segment * 1.25],
      ['M', 0, radius3],
      ['A', radius3, radius3, 0, 1, 1, 0, -radius3],
      ['A', radius3, radius3, 0, 1, 1, 0, radius3],
    ];
  },
  {
    style: ['fill'],
  },
);
