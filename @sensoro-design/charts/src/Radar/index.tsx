import type { RadarConfig as BaseRadarConfig } from '@ant-design/plots';
import { Radar as BaseRadar } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useEffect, useMemo, useState, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { calculateOffset, generateColorMap } from '../utils';
import './index.less';

export interface RadarConfig extends BaseConfig {
  title?: string;
  data?: BaseRadarConfig['data'];
  config?: Omit<BaseRadarConfig, 'data'> & { data?: BaseRadarConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
  showTooltipTitle,
}: Partial<GetDefaultConfigProps>) => {
  return {
    ...getDefaultConfig({
      radar: true,
      tooltipBox: true,
      showTooltipTitle,
      colorMap,
      seriesField,
      customContentData,
    }),
    legend: false,
  };
};

const prefixCls = 'sen-radar';

const Radar: FC<RadarConfig> = ({
  config,
  data,
  title,
  legend = true,
  timeRange,
  style = {},
  className = '',
  customContentData,
  empty,
  tooltip,
}) => {
  const [rightPadding, setRightPadding] = useState(0);
  const [width, setWidth] = useState(154);
  const [showRadar, setShowRadar] = useState(false);
  const { seriesField } = config ?? {};
  const originalData = useMemo(
    () =>
      map(data ?? config?.data, (item, idx) => ({ ...item, __index__: idx })),
    [data, config?.data],
  );

  const legendMap = useMemo(
    () => (seriesField ? groupBy(originalData, seriesField) : {}),
    [seriesField, originalData],
  );

  const colorMap = useMemo(() => {
    const data = transform(
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
      seriesField,
      customContentData,
      showTooltipTitle: typeof tooltip === 'object' ? tooltip.showTitle : true,
    }),
    config,
    {
      data: originalData,
    },
  ) as BaseRadarConfig;

  useEffect(() => {
    if (legend === false) {
      setShowRadar(true);
      return;
    }
    const { width, rightPadding } = calculateOffset({
      className,
      type: 'radar',
      legend,
      newConfig,
      defaultHeight: 154,
      extraWidth: 96,
    });
    setRightPadding(rightPadding);
    setWidth(width);
    setTimeout(() => {
      setShowRadar(true);
    }, 100);
  }, [newConfig, legend]);

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <Composite
        title={title}
        seriesField={seriesField}
        legend={
          legend === false
            ? false
            : {
                direction: 'right',
                type: 'box',
                height: newConfig.height,
                ...(typeof legend === 'object' ? legend : {}),
              }
        }
        colorMap={colorMap}
        timeRange={timeRange}
      >
        {!showRadar ? null : empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseRadar
            {...newConfig}
            width={width}
            padding={[24, rightPadding, 24, 0]}
          />
        )}
      </Composite>
    </div>
  );
};

export default Radar;
