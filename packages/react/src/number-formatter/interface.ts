import type React from 'react';
import type { Factory } from '../helpers/factory';

export interface NumberFormatterProps extends React.ComponentPropsWithoutRef<'span'> {
  value?: number | string;
  allowNegative?: boolean;
  decimalScale?: number;
  decimalSeparator?: string;
  fixedDecimalScale?: boolean;
  prefix?: string;
  suffix?: string;
  thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan' | 'none';
  thousandSeparator?: string | boolean;
}

export type NumberFormatterFactory = Factory<{
  props: NumberFormatterProps;
}>;
