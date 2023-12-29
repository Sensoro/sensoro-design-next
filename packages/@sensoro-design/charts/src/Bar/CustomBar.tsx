import { classNames } from '@pansy/shared';
import { map } from 'lodash';
import React, { FC, memo, useMemo } from 'react';
const prefixCls = 'sen-bar';

interface Data {
  label: string;
  value: number | string;
  [key: string]: any;
}

export interface CustomBarProps {
  type?: 'basic' | 'alone';
  data: Data[];
}

function getInterval(val: number) {
  if (val < 10) {
    return 10;
  } else {
    const len = String(val).length;
    return (
      Math.ceil(val / Math.pow(10, Math.floor(len / 10))) *
      Math.pow(10, Math.floor(len / 10))
    );
  }
}

const CustomBar: FC<CustomBarProps> = memo(function ({ type, data }) {
  const maxVal = useMemo(() => {
    const val = data.reduce((pre, cur) => {
      return pre > Number(cur.value) ? pre : Number(cur.value);
    }, 0);
    return getInterval(val);
  }, [data]);

  // 这里可以根据type来决定bar的样式
  return (
    <div className={`${prefixCls}-custom-bar`}>
      {map(data, (item, i) => {
        return (
          <div
            key={`${item.label}${i}`}
            className={
              type === 'basic'
                ? `${prefixCls}-item-row`
                : `${prefixCls}-item-column`
            }
          >
            <span
              className={classNames(`${prefixCls}-label`, {
                [`${prefixCls}-label-inline`]: type === 'basic',
              })}
            >
              {item.label}
            </span>
            <div className={`${prefixCls}-item-row`}>
              <div className={`${prefixCls}-percent`}>
                <div
                  style={{
                    width: `${(Number(item.value) / maxVal) * 100}%`,
                    height: '100%',
                    background: '#588BEE',
                    borderRadius: '1px',
                  }}
                />
              </div>
              <span className={`${prefixCls}-value`}>{item.value}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export { CustomBar };
