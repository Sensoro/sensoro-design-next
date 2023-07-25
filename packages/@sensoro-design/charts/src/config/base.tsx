import React from 'react';
import type { BaseConfig } from '../types';
import type { ColorMap } from '../utils';

import { get, map } from 'lodash';
import SVG from 'react-inlinesvg';
import marker from '../assets/marker.svg';
import { COLORS_SMALL } from '../style';

export interface GetDefaultConfigProps extends BaseConfig {
  /** 自定义标点 */
  point?: boolean;
  /** 自定义 Tooltip */
  tooltip?: boolean;
  /** 自定义颜色映射值 */
  colorMap?: ColorMap;
  /** 分类字段 */
  seriesField?: string;
  /** 是否展示十字辅助线 */
  showCrosshairs?: boolean;
}

const prefixCls = 'g2-tooltip';

/**
 * 获取默认配置
 * @param point 是否开启点配置
 * @param tooltip 是否开启自定义 Tooltip
 * @param colorMap 自定义颜色映射值
 * @param seriesField 分类字段
 * @param customContentData 修改tooltip render数据
 */
export const getDefaultConfig = ({
  point,
  tooltip,
  colorMap,
  seriesField,
  customContentData,
  showCrosshairs = false,
}: GetDefaultConfigProps): any => {
  const config = {
    xAxis: {
      // x轴文字
      label: {
        style: {
          textAlign: 'center',
          fill: 'rgba(10, 27, 57, 0.25)',
          fontSize: 12,
        },
      },
      // x轴的线
      line: {
        style: {
          stroke: '#eceef0',
          fill: 'pink',
        },
      },
      // 刻度线
      tickLine: {
        style: {
          stroke: '#eceef0',
          length: 4,
        },
      },
    },
    yAxis: {
      label: {
        style: {
          fill: 'rgba(10, 27, 57, 0.25)',
          fontSize: 12,
        },
      },
      grid: {
        line: {
          style: {
            stroke: '#f1f2f4',
            lineWidth: 1,
            lineDash: [3, 2],
          },
        },
      },
    },
    tooltip: {
      showCrosshairs,
      crosshairs: {
        type: 'x', // 展示十字辅助线
        line: {
          style: {
            stroke: '#82b6ff',
            lineWidth: 2,
            lineDash: [3, 2],
            lineOpacity: 1,
          },
        },
      },
    },
  };

  if (point) {
    Object.assign(config, {
      point: {
        size: 4,
        shape: 'circle',
        style: {
          fill: 'white',
          stroke: '#5591F2',
          lineWidth: 1,
          state: {
            active: {
              style: {
                stroke: '#588BEE',
              },
            },
          },
        },
      },
    });
  }

  if (tooltip) {
    Object.assign(config, {
      tooltip: {
        ...config.tooltip,
        domStyles: {
          'g2-tooltip': {
            boxShadow: 'none',
            backgroundColor: 'rgba(10, 27, 57, 0.8)',
          },
          'g2-tooltip-title': {
            color: '#c2c7ce',
            fontSize: 12,
            lineHeight: '20px',
            margin: '12px 0 4px',
          },
          'g2-tooltip-name': {
            color: '#fff',
          },
          'g2-tooltip-value': {
            color: '#fff',
          },
          'g2-tooltip-marker': {
            borderRadius: '2px',
            height: 2,
          },
          'g2-tooltip-list-item': {
            display: 'flex',
            alignItems: 'center',
          },
        },
        customContent: (title: string, original: any[]) => {
          const data = customContentData
            ? customContentData(original)
            : original;

          return (
            <>
              <div className={`${prefixCls}-title`}>{title}</div>
              <ul className={`${prefixCls}-list`}>
                {map(data, (item, idx) => {
                  const color = seriesField
                    ? colorMap?.[get(item, `data.${seriesField}`)]
                    : COLORS_SMALL[0];

                  return (
                    <li key={idx} className={`${prefixCls}-list-item`}>
                      <SVG
                        src={marker}
                        preProcessor={(code) =>
                          code.replace(/fill=".*?"/g, `fill="${color}"`)
                        }
                        style={{ marginRight: 8 }}
                        width={8}
                        height={8}
                      />
                      <span className={`${prefixCls}-name`}>{item.name}</span>
                      <span className={`${prefixCls}-value`}>{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        },
      },
    });
  }

  return config;
};
