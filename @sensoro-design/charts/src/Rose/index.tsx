import type { RoseConfig as BaseRoseConfig } from '@ant-design/plots';
import { Rose as BaseRose } from '@ant-design/plots';
import { groupBy, map, merge, transform } from 'lodash';
import React, { useEffect, useMemo, useState, type FC } from 'react';
import Composite from '../components/Composite';
import type { GetDefaultConfigProps } from '../config/base';
import { getDefaultConfig } from '../config/base';
import type { BaseConfig } from '../types';
import { generateColorMap } from '../utils';
import './index.less';

const reg = /left:.+?;/;

export interface RoseConfig extends BaseConfig {
  title?: string;
  data?: BaseRoseConfig['data'];
  config?: Omit<BaseRoseConfig, 'data'> & { data?: BaseRoseConfig['data'] };
}

const genDefaultConfig = ({
  colorMap,
  seriesField,
  customContentData,
  height,
}: Partial<GetDefaultConfigProps>) => {
  return {
    ...getDefaultConfig({
      rose: true,
      tooltipBox: true,
      showTooltipTitle: false,
      colorMap,
      seriesField,
      customContentData,
      height,
    }),
    legend: false,
  };
};

const prefixCls = 'sen-rose';

const Rose: FC<RoseConfig> = ({
  config,
  data,
  title,
  legend,
  timeRange,
  style = {},
  className = '',
  customContentData,
  empty,
}) => {
  const [rightPadding, setRightPadding] = useState(0);
  const [width, setWidth] = useState(154);
  const [showRose, setShowRose] = useState(false);
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
      height: config?.height || 204,
    }),
    config,
    {
      data: originalData,
    },
  ) as BaseRoseConfig;

  useEffect(() => {
    if (legend === false) {
      setShowRose(true);
      return;
    }
    const pieWidth =
      (document.querySelector(
        `${className ? `.${className}.sen-rose` : '.sen-rose'}`,
      )?.clientWidth ?? 252) - 48;
    const width = newConfig.height ?? 204;

    const legendWidth =
      document.querySelector(
        `${
          className
            ? `.${className} .sen-charts-legend`
            : '.sen-rose .sen-charts-legend'
        }`,
      )?.clientWidth ?? 0;

    const { verticalGap } =
      legend === true || !legend
        ? { verticalGap: 48 }
        : { verticalGap: 48, ...legend };

    const legendRightPadding = legendWidth + verticalGap;
    const contentWidth = width + legendRightPadding;
    const contentPadding = (pieWidth - contentWidth) / 2;
    const left = contentPadding + width + verticalGap;

    let curStyle = document
      .querySelector(
        `${
          className
            ? `.${className} .sen-charts-legend`
            : '.sen-rose .sen-charts-legend'
        }`,
      )
      ?.getAttribute('style');
    curStyle = curStyle?.replace('position: absolute;', '').trim();
    curStyle = curStyle?.replace(reg, '').trim();

    document
      .querySelector(
        `${
          className
            ? `.${className} .sen-charts-legend`
            : '.sen-rose .sen-charts-legend'
        }`,
      )
      ?.setAttribute(
        'style',
        `${`position: absolute; left: ${left}px;${curStyle || ''}`}`,
      );

    setRightPadding(legendRightPadding);
    setWidth(pieWidth);
    setTimeout(() => {
      setShowRose(true);
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
        {!showRose ? null : empty ? (
          <div className={`${prefixCls}-empty`}>
            {typeof empty === 'boolean' ? '暂无内容' : empty}
          </div>
        ) : (
          <BaseRose
            {...newConfig}
            width={width}
            padding={[0, rightPadding, 0, 0]}
          />
        )}
      </Composite>
    </div>
  );
};

export default Rose;
