import { classNames } from '@pansy/shared';
import { Segmented } from 'antd';
import type { SegmentedProps } from 'antd/es/segmented';
import { isBoolean } from 'lodash';
import React, { useMemo, type FC } from 'react';
import type { BaseLegend } from '../../types';
import type { ColorMap } from '../../utils';
import Legend from '../Legend';
import Title from '../Title';
import './index.less';

const prefixCls = 'sen-charts';

interface CompositeProps {
  title?: string;
  /** 自定义颜色映射值 */
  colorMap?: ColorMap;
  /** 分类字段 */
  seriesField?: string;
  /** 自定义图例配置 */
  legend?: boolean | BaseLegend;
  /** 时间选择器配置 */
  timeRange?: SegmentedProps; // 配置了日期选择器后图例只能是alone
  /** 图表内容 */
  children: React.ReactNode;
}

const Composite: FC<CompositeProps> = ({
  title,
  seriesField,
  legend,
  colorMap,
  timeRange,
  children,
}) => {
  const isLegend = useMemo(() => {
    return !!seriesField && !!legend && !!colorMap;
  }, [seriesField, legend, colorMap]);

  const legendDirection = useMemo(() => {
    const obj = {
      horizontal: true,
      left: false,
      right: false,
      vertical: false,
      alone: false,
      top: false,
      bottom: false,
      box: false,
    };
    if (legend && !isBoolean(legend)) {
      const {
        direction = 'horizontal',
        position = 'bottom',
        type = 'svg',
      } = legend as BaseLegend;

      obj.horizontal = false; // 先把默认值horizontal改为false
      obj[direction] = true;
      obj[position] = true;
      if (type === 'box') {
        obj['box'] = true;
      }

      obj.vertical = obj.left || obj.right;
    }
    // 如果传递了时间选择器配置，legend为true时，默认设置图例为独立底部显示
    if (timeRange && obj.horizontal) {
      obj.alone = true;
      obj.bottom = true;
      obj.horizontal = false;
    }
    return obj;
  }, [legend, timeRange]);

  return (
    <>
      {!title && (!isLegend || legendDirection.vertical) ? null : (
        <div
          className={classNames(`${prefixCls}-header`, {
            [`${prefixCls}-horizontal`]: legendDirection.horizontal,
            [`${prefixCls}-alone-top`]:
              legendDirection.alone && legendDirection.top,
            [`${prefixCls}-timeRange`]: timeRange,
          })}
        >
          {!!timeRange ? (
            <div className={`${prefixCls}-timeRange-wrap`}>
              <Title text={title} />
              {/* @ts-ignore */}
              <Segmented {...timeRange} />
            </div>
          ) : (
            <Title text={title} />
          )}
          {isLegend &&
            (legendDirection.horizontal ||
              (legendDirection.alone && legendDirection.top)) && (
              <Legend
                legend={isBoolean(legend) ? {} : (legend as BaseLegend)}
                colors={colorMap as ColorMap}
              />
            )}
        </div>
      )}
      {isLegend && legendDirection.vertical ? (
        <div
          style={{
            // @ts-ignore
            gap:
              legendDirection.vertical && !isBoolean(legend)
                ? legend?.verticalGap
                : undefined,
          }}
          className={classNames(`${prefixCls}-vertical`, {
            [`${prefixCls}-align-center`]: legendDirection.box,
          })}
        >
          <div className={`${prefixCls}-canvas`}>{children}</div>
          <Legend
            legend={isBoolean(legend) ? {} : (legend as BaseLegend)}
            colors={colorMap as ColorMap}
          />
        </div>
      ) : (
        <div className={`${prefixCls}-canvas`}>{children}</div>
      )}
      {isLegend && legendDirection.alone && legendDirection.bottom && (
        <div className={`${prefixCls}-alone-bottom`}>
          <Legend
            legend={isBoolean(legend) ? {} : (legend as BaseLegend)}
            colors={colorMap as ColorMap}
          />
        </div>
      )}
    </>
  );
};

export default Composite;
