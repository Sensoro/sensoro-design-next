import { category20 } from '../../config';
import type { ScaleConfig } from './types';

export const DEFAULT_SCALE_CONFIG: ScaleConfig = {
  y: { type: 'sqrt' },
  x: { padding: 0 },
  color: {
    range: category20,
  },
};
