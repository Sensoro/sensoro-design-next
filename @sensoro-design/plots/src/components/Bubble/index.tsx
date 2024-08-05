import React, { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { isEqual } from '@antv/util';
import { cloneDeep, get } from 'lodash-es';
import { Chart } from '@antv/g2';
import { category10 } from '../../config';
import type { BubbleConfig } from './types';

export const Bubble = forwardRef<Chart, BubbleConfig>(
  (config, ref) => {
    const {
      colors = category10,
      // eslint-disable-next-line react/no-unstable-default-props
      data = [],
      style,
      ...rest
    } = config;
    const chart = useRef<Chart>();
    const chartOptions = useRef<BubbleConfig>();
    const container = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => chart.current!);

    useEffect(
      () => {
        if (chart.current && !isEqual(chartOptions.current, config)) {
          let changeData = false;
          if (chartOptions.current) {
            const { data: currentData, ...currentConfig } = chartOptions.current;
            const { data: inputData, ...inputConfig } = config;
            changeData = isEqual(currentConfig, inputConfig);
          }
          chartOptions.current = cloneDeep(config);

          if (changeData) {
            chart.current.changeData(
              {
                value: {
                  name: 'flare',
                  children: get(config, 'data'),
                },
              },
            );
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [config.data],
    );

    useEffect(
      () => {
        if (!container.current) {
          return () => {};
        }

        const chartInstance = new Chart({
          container: container.current,
        });

        chartInstance.options({
          type: 'pack',
          data: {
            value: {
              name: 'flare',
              children: data,
            },
          },
          encode: {
            value: 'value',
            color: (d: any) => d.data.name,
          },
          scale: {
            color: {
              range: ['transparent', ...colors],
            },
          },
          legend: false,
          style: {
            labelText: (d: any) => {
              return d.depth === 1 ? `${d.data.name}` : '';
            },
            labelFontSize: 16,
            ...style,
          },
          ...rest,
        });

        chartInstance.render();

        return () => {
          if (chart.current) {
            chart.current.destroy();
            chart.current = undefined;
          }
        };
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    return (
      <div ref={container} />
    );
  },
);

export type { BubbleConfig };
export default Bubble;
