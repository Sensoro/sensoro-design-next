import {
  colorBlue2,
  colorGrey02,
  colorGrey04,
} from '../../config';
import type { ScaleConfig } from './types';

export function getScaleConfig(isZero: boolean): ScaleConfig {
  const range = [colorBlue2, isZero ? colorGrey02 : colorGrey04];

  return {
    color: {
      range,
    },
  };
}
