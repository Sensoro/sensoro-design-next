import { classNames } from '@pansy/shared';
import { Space } from 'antd';
import type { SpaceProps } from 'antd/es/space';
import { get, includes, isFunction, keys, map } from 'lodash';
import React, { useMemo, useState } from 'react';
import SVG from 'react-inlinesvg';
import left from '../../assets/left.svg';
import marker from '../../assets/marker.svg';
import right from '../../assets/right.svg';
import type { BaseLegend } from '../../types';

import './index.less';

interface LegendProps {
  legend: BaseLegend;
  colors: Record<string, string>;
}

const prefixCls = 'sen-charts-legend';
const hors = ['horizontal', 'alone'];

const Legend: React.FC<LegendProps> = ({ legend, colors }) => {
  const [page, setPage] = useState(1);

  const direction = useMemo(
    () =>
      includes(
        hors,
        (get(legend, 'direction', 'horizontal') as SpaceProps['direction']) ??
          'horizontal',
      )
        ? 'horizontal'
        : 'vertical',
    [legend],
  );

  const layout = useMemo(() => get(legend, 'layout', 'vertical'), [legend]);

  const type = useMemo(() => get(legend, 'type', 'svg') ?? 'svg', [legend]);

  const gap = useMemo(() => {
    return legend?.legendItemGap
      ? legend.legendItemGap
      : direction === 'horizontal' || layout === 'horizontal'
      ? 24
      : 8;
  }, [legend, direction, layout]);

  const lineGap = useMemo(() => {
    return legend?.lineGap
      ? direction === 'horizontal' || layout === 'horizontal'
        ? { rowGap: legend.lineGap }
        : { columnGap: legend.lineGap }
      : {};
  }, [legend, layout, direction]);

  const textStyle = useMemo(() => get(legend, 'textStyle', {}), [legend]);

  const curtLegend = useMemo(() => {
    if (legend.pageRow! > 0) {
      const names = keys(colors).slice(
        (page - 1) * legend.pageRow!,
        page * legend.pageRow!,
      );

      const res: { [key: string]: any } = {};
      names.forEach((name) => (res[name] = colors[name]));

      return res;
    } else {
      return colors;
    }
  }, [legend, colors, page]);

  /**
   * 上一页方法
   */
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  /**
   * 下一页方法
   */
  const handleNextPage = () => {
    if (page * legend.pageRow! < keys(colors).length) {
      setPage(page + 1);
    }
  };

  return (
    <div
      className={classNames(prefixCls, {
        [`${prefixCls}-center`]: direction === 'vertical' && !legend?.lineGap,
        [`${prefixCls}-between`]: !!legend.pageRow,
      })}
      style={legend.height ? { height: legend.height } : {}}
    >
      <Space
        direction={layout === 'horizontal' ? 'horizontal' : direction}
        align={
          layout === 'horizontal'
            ? 'center'
            : direction === 'vertical'
            ? 'baseline'
            : 'start'
        }
        size={gap}
        className={classNames(`${prefixCls}-main`, {
          [`${prefixCls}-horizontal`]:
            direction === 'horizontal' || layout === 'horizontal',
          [`${prefixCls}-center`]: direction === 'vertical' && !legend?.lineGap,
          [`${prefixCls}-start`]: !!legend.pageRow,
        })}
        style={lineGap}
      >
        {map(keys(curtLegend), (name, index) => (
          <div className={`${prefixCls}-item`} key={name}>
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
            <span className={`${prefixCls}-name`} style={textStyle}>
              {legend?.processData && isFunction(legend?.processData)
                ? legend.processData(name, index)
                : name}
            </span>
          </div>
        ))}
      </Space>
      {!!legend.pageRow && (
        <div className={`${prefixCls}-page`}>
          <div
            className={classNames(`${prefixCls}-page-item`, {
              [`${prefixCls}-page-item-disabled`]: page === 1,
            })}
            onClick={handlePrevPage}
          >
            <SVG
              src={left}
              preProcessor={(code) =>
                code.replace(/fill=".*?"/g, `fill="currentColor"`)
              }
              width={12}
              height={12}
            />
          </div>
          <div
            className={classNames(`${prefixCls}-page-item`, {
              [`${prefixCls}-page-item-disabled`]:
                page * legend.pageRow! >= keys(colors).length,
            })}
            onClick={handleNextPage}
          >
            <SVG
              src={right}
              preProcessor={(code) =>
                code.replace(/fill=".*?"/g, `fill="currentColor"`)
              }
              width={12}
              height={12}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Legend;
