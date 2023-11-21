import type { GaugeConfig as BaseGaugeConfig } from '@ant-design/plots';
import { Gauge as BaseGauge, G2 } from '@ant-design/plots';
import { merge, transform } from 'lodash';
import React, { useMemo, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
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
  legend,
  showTooltipTitle,
}: Partial<GetDefaultConfigProps>) => {
  return {
    basic: {
      ...getDefaultConfig({
        gauge: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
      }),
      columnWidthRatio: 0.4,
      legend: false,
    },
    compare: {
      ...getDefaultConfig({
        gauge: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        customContentData,
      }),
      columnWidthRatio: 0.5,
      legend: false,
    },
    series: {
      ...getDefaultConfig({
        gauge: true,
        tooltip: true,
        tooltipBox: typeof legend === 'object' && legend?.type === 'box',
        showTooltipTitle,
        colorMap,
        seriesField,
        customContentData,
      }),
      marginRatio: -1,
      columnWidthRatio: 0.8,
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
  timeRange,
  style = {},
  className = '',
  empty,
  tooltip,
  customContentData,
}) => {
  const { registerShape, Util } = G2; // 自定义 Shape 部分

  registerShape('point', 'custom-gauge-indicator', {
    draw(cfg, container) {
      // 使用 customInfo 传递参数
      const { indicator, defaultColor } = cfg.customInfo;
      const { pointer } = indicator;
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
        const radius = this.coordinate.getRadius();
        const midAngle = (startAngle + endAngle) / 2;
        const { x: x1, y: y1 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius / 15,
          midAngle + 1 / Math.PI,
        );
        const { x: x2, y: y2 } = Util.polarToCartesian(
          center.x,
          center.y,
          radius / 15,
          midAngle - 1 / Math.PI,
        );
        const { x, y } = Util.polarToCartesian(
          center.x,
          center.y,
          radius * 0.65,
          midAngle,
        );
        const path = [
          ['M', center.x, center.y],
          ['L', x1, y1],
          ['L', x, y],
          ['L', x2, y2],
          ['Z'],
        ]; // pointer

        group.addShape('path', {
          name: 'pointer',
          attrs: {
            path,
            fill: defaultColor,
            ...pointer.style,
          },
        });
      }

      return group;
    },
  });

  const legendMap = useMemo(() => {}, []);

  const colorMap = useMemo(() => {
    const data = transform(
      // @ts-ignore
      legendMap,
      (result: Record<string, ''>, value, key) => {
        result[key] = '';
        return result;
      },
      {},
    );
    return generateColorMap(data);
  }, [legendMap]);

  const newConfig = merge(
    {},
    genDefaultConfig({
      colorMap,
      customContentData,
      legend,
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
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
        // seriesField={xField}
        legend={legend}
        colorMap={colorMap}
        timeRange={timeRange}
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
