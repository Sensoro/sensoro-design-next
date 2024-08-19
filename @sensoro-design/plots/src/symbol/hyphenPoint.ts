import type { SymbolFactor } from '@antv/g2';

export const hyphenPoint = Object.assign<SymbolFactor, Partial<SymbolFactor>>(
  (x, y, r) => {
    const segment = r / 10;
    const radius1 = segment * 1.25;

    return [
      ['M', segment * 3.75, -segment * 1.25],
      ['L', -segment * 3.75, -segment * 1.25],
      ['A', radius1, radius1, 0, 0, 0, -segment * 3.75, segment * 1.25],
      ['L', segment * 3.75, segment * 1.25],
      ['A', radius1, radius1, 0, 0, 0, segment * 3.75, -segment * 1.25],
      ['Z'],
    ];
  },
  {
    style: ['fill'],
  },
);
