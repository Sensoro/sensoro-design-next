import React from 'react';
import { NumericFormat } from 'react-number-format';
import type { NumberFormatterProps } from './interface';

export function NumberFormatter(props: NumberFormatterProps) {
  const { value, defaultValue, ...others } = props;

  if (value === undefined) {
    return null;
  }

  return <NumericFormat displayType="text" value={value} {...others} />;
}
