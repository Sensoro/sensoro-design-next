import React from 'react';
import type { ScoreConfig } from './interface';

export function Score(
  {
    color = 'green',
  }: ScoreConfig,
) {
  console.log(color);
  return null;
}
