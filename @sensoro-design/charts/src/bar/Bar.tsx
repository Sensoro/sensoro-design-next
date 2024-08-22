import { Bar as BaseBar } from '@sensoro-design/plots';
import type { BarConfig as BaseBarConfig } from '@sensoro-design/plots';
import { deepMix } from '@antv/util';
import React from 'react';

export interface BarConfig extends BaseBarConfig {
  // 自定义属性
  aloneLabel?: boolean; // label是否单独一行
}

const ALONE_TITLE_AXIS = {
  x: {
    size: 0,
    label: false,
  },
};

const ALONE_TITLE_LABEL = {
  text: 'name',
  position: 'left',
  transform: [{ type: 'overlapDodgeY' }],
  dy: -18,
  lineHeight: 20,
};

export function Bar(props: BarConfig) {
  const { aloneLabel, data, axis, yField, label, width, height, paddingRight, markBackground, ...rest } = props;
  const valueLength = data?.reduce(
    (len: number, next: BaseBarConfig['data']) => Math.max(next[yField as string], len),
    0,
  ).toString().length;

  const axisConfig = aloneLabel ? deepMix({}, ALONE_TITLE_AXIS, axis) : axis;

  const labelConfig = aloneLabel
    ? deepMix({}, ALONE_TITLE_LABEL, label)
    : label;

  const heightConfig
    = height || data.length * 8 + (data.length - 1) * (aloneLabel ? 36 : 24) + 92 + 48;

  const paddingRightConfig = paddingRight || valueLength * 7;

  const markBackgroundConfig = deepMix(
    {},
    { label: { dx: width! - 48 - 16 - (aloneLabel ? 0 : 110) } },
    markBackground,
  );

  return (
    <BaseBar
      width={width}
      height={heightConfig}
      yField={yField}
      axis={axisConfig}
      label={labelConfig}
      paddingRight={paddingRightConfig}
      markBackground={markBackgroundConfig}
      data={data}
      {...rest}
    />
  );
}
