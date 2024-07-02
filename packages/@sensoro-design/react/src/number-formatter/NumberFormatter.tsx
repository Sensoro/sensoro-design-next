import React from 'react';
import { NumericFormat } from 'react-number-format';
import { factory } from '../helpers/factory';
import type { NumberFormatterFactory } from './interface';

export const NumberFormatter = factory<NumberFormatterFactory>((props) => {
  const { value, defaultValue, ...others } = props;

  if (value === undefined) {
    return null;
  }

  return <NumericFormat displayType="text" value={value} {...others} />;
});
