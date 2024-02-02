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

  const labels = useMemo(() => {
    return data.map((item) => item.label);
  }, [data]);

  // 这里可以根据type来决定bar的样式
  return type === 'basic' ? (
    <div className={classNames(`${prefixCls}-custom-bar`, `${prefixCls}-row`)}>
      <div className={classNames(`${prefixCls}-flex`, `${prefixCls}-column`)}>
        {map(labels, (label) => {
          return (
            <span
              className={classNames(`${prefixCls}-label`, {
                [`${prefixCls}-label-inline`]: type === 'basic',
              })}
            >
              {label}
            </span>
          );
        })}
      </div>
      <div
        className={classNames(`${prefixCls}-flex`, `${prefixCls}-column`)}
        style={{ flex: 1 }}
      >
        {map(data, (item, i) => {
          return (
            <div key={`${item.label}${i}`} className={`${prefixCls}-item-row`}>
              <div className={`${prefixCls}-percent`}>
                <div
                  style={{
                    width: `${(Number(item.value) / maxVal) * 100}%`,
                    height: '8px',
                    background: '#588BEE',
                    borderRadius: '1px',
                  }}
                />
              </div>
              <span className={`${prefixCls}-value`}>{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div
      className={classNames(`${prefixCls}-custom-bar`, `${prefixCls}-column`)}
    >
      {map(data, (item, i) => {
        return (
          <div
            key={`${item.label}${i}`}
            className={classNames(
              `${prefixCls}-flex`,
              `${prefixCls}-item-column`,
            )}
          >
            <span className={classNames(`${prefixCls}-label`)}>
              {item.label}
            </span>
            <div className={`${prefixCls}-item-row`}>
              <div className={`${prefixCls}-percent`}>
                <div
                  style={{
                    width: `${(Number(item.value) / maxVal) * 100}%`,
                    height: '8px',
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
