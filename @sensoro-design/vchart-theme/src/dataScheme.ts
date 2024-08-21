import type { DataSchemeItem, ProgressiveDataScheme } from '@visactor/vchart';
import { category1, category2, category3 } from './config';

export const dataScheme: ProgressiveDataScheme<DataSchemeItem> = [
  {
    maxDomainLength: 8,
    scheme: category1,
  },
  {
    maxDomainLength: 16,
    scheme: category2,
  },
  {
    scheme: category3,
  },
];
