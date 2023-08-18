import type { SpaceProps } from 'antd/es/space';
import React, { useMemo } from 'react';
import type { BaseLegend } from '../../types';

import { Space } from 'antd';
import { get, isFunction, keys, map } from 'lodash';
import SVG from 'react-inlinesvg';
import marker from '../../assets/marker.svg';

import './index.less';

interface LegendProps {
  legend: BaseLegend;
  colors: Record<string, string>;
}

const prefixCls = 'sen-legend';

const Legend: React.FC<LegendProps> = ({ legend, colors }) => {
  const direction = useMemo(
    () =>
      (get(legend, 'direction', 'horizontal') as SpaceProps['direction']) ??
      'horizontal',
    [legend],
  );

  const type = useMemo(() => get(legend, 'type', 'svg') ?? 'svg', [legend]);

  return (
    <Space
      direction={direction}
      size={direction === 'horizontal' ? 24 : 8}
      className={prefixCls}
      style={{
        rowGap: direction === 'horizontal' ? 24 : 8,
        columnGap: 24,
        flexWrap: 'wrap',
      }}
    >
      {map(keys(colors), (name, index) => (
        <span className={`${prefixCls}-item`} key={name}>
          {type === 'svg' ? (
            <SVG
              src={marker}
              preProcessor={(code) =>
                code.replace(/fill=".*?"/g, `fill="${colors[name]}"`)
              }
              style={{ marginRight: 8 }}
              width={8}
              height={8}
            />
          ) : (
            <span
              className={`${prefixCls}-box`}
              style={{ background: colors[name] }}
            />
          )}
          <span className={`${prefixCls}-name`}>
            {legend?.processData && isFunction(legend?.processData)
              ? legend.processData(name, index)
              : name}
          </span>
        </span>
      ))}
    </Space>
  );
};

export default Legend;
