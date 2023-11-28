import type { GaugeConfig as BaseGaugeConfig } from '@ant-design/plots';
import { Gauge as BaseGauge, G2 } from '@ant-design/plots';
import { merge } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import { COLORS_SMALL } from '../style';
import type { BaseConfig, BaseLegend } from '../types';
import './index.less';

export interface GaugeConfig extends BaseConfig {
  type?: 'basic' | 'compare' | 'series'; // 基础、分组、双向
  title?: string;
  percent?: BaseGaugeConfig['percent'];
  config?: Omit<BaseGaugeConfig, 'percent'> & {
    percent?: BaseGaugeConfig['percent'];
  };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
}: Partial<GetDefaultConfigProps>) => {
  return {
    basic: {
      ...getDefaultConfig({
        gauge: true,
      }),
      legend: false,
    },
    compare: {
      ...getDefaultConfig({
        gauge: true,
        colorMap,
        seriesField,
        customContentData,
      }),
      legend: false,
    },
    series: {
      ...getDefaultConfig({
        gauge: true,
        colorMap,
        seriesField,
        customContentData,
      }),
      legend: false,
    },
  };
};

const prefixCls = 'sen-gauge';

const Gauge: FC<GaugeConfig> = ({
  config,
  percent,
  title,
  type = 'basic',
  legend,
  style = {},
  className = '',
  empty,
  customContentData,
}) => {
  const { registerShape, Util } = G2; // 自定义 Shape 部分

  registerShape('point', 'custom-gauge-indicator', {
    draw(cfg, container) {
      // 使用 customInfo 传递参数
      const { indicator, defaultColor } = cfg.customInfo;
      const { pointer, pin } = indicator;
      const group = container.addGroup(); // 获取极坐标系下画布中心点

      // @ts-ignore
      const center = this.parsePoint({
        x: 0,
        y: 0,
      }); // 绘制指针

      if (pointer) {
        // @ts-ignore
        const { startAngle, endAngle } = Util.getAngle(cfg, this.coordinate);
        // @ts-ignore
        const midAngle = (startAngle + endAngle) / 2;

        const { x: x1, y: y1 } = Util.polarToCartesian(
          center.x,
          center.y,
          (config?.height || 96) * 0.6,
          midAngle + 0.01,
        );

        const { x: x2, y: y2 } = Util.polarToCartesian(
          center.x,
          center.y,
          (config?.height || 96) * 1.05,
          midAngle + 0.01,
        );
        const path = [['M', x1, y1], ['L', x2, y2], ['Z']];

        group.addShape('path', {
          name: 'pointer',
          attrs: {
            path,
            fill: defaultColor,
            ...pointer.style,
          },
        });
      }

      if (pin) {
        const pinStyle = pin.style || {};
        const {
          lineWidth = 1,
          fill = defaultColor,
          stroke = defaultColor,
          r,
        } = pinStyle;
        group.addShape('circle', {
          name: 'pin-outer',
          attrs: {
            x: center.x,
            y: center.y,
            ...pin.style,
            fill: 'transparent',
            r: (config?.height || 96) * 0.6,
            lineWidth,
            stroke: stroke,
          },
        });
        group.addShape('circle', {
          name: 'pin-inner',
          attrs: {
            x: center.x,
            y: center.y,
            r,
            stroke: 'transparent',
            fill,
          },
        });
      }

      return group;
    },
  });

  const colorMap = useMemo(() => {
    if (typeof legend !== 'object') return;

    const { labels = ['成功', '失败'] } = legend as BaseLegend;
    const colors: { [key: string]: string } = {};
    colors[labels[0]] = COLORS_SMALL[0];
    colors[labels[1]] = '#ECEEF0';

    return colors;
  }, [legend]);

  const newConfig = merge(
    {},
    genDefaultConfig({
      colorMap,
      customContentData,
      legend,
    })[type],
    config,
    {
      data: percent,
    },
  ) as BaseGaugeConfig;

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={'parcent'}
        legend={legend}
        colorMap={colorMap}
      >
        {empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseGauge {...newConfig} />
        )}
      </Composite>
    </div>
  );
};

export default Gauge;
