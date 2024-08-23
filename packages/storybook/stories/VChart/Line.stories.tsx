import React from 'react';
import { Common, type CommonProps, Line, type LineProps } from '@sensoro-design/vchart';

const meta = {
  title: 'VChart/Line',
};

export default meta;

export function Basic() {
  const leftAxesCommonSpec = {
    expand: { max: 0.2 },
    label: { flush: true, visible: true },
    tick: { visible: false },
    forceTickCount: 3,
  };
  const spec: CommonProps = {
    padding: 24,
    layout: {
      type: 'grid',
      col: 3,
      row: 3,
      elements: [
        {
          modelId: 'text',
          col: 0,
          colSpan: 2,
          row: 0,
        },
        {
          modelId: 'legend',
          col: 2,
          row: 0,
        },
        {
          modelId: 'humidity',
          col: 1,
          colSpan: 2,
          row: 1,
        },
        {
          modelId: 'humidity-left',
          col: 0,
          colSpan: 1,
          row: 1,
        },
        {
          modelId: 'axes-bottom',
          col: 1,
          colSpan: 2,
          row: 2,
        },
      ],
    },
    region: [
      {
        id: 'humidity',
      },
    ],
    title: {
      id: 'text',
      padding: {
        top: 0,
      },
      text: '自定义标题',
      textStyle: {
        lineHeight: 24,
      },
      subtext: '这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题',
      subtextStyle: {
        lineHeight: 24,
      },
    },
    legends: {
      padding: {
        top: 0,
      },
      visible: true,
      orient: 'bottom',
      position: 'end',
      id: 'legend',
      regionId: ['humidity'],
    },
    series: [
      {
        id: 'humidity-series',
        regionId: 'humidity',
        type: 'line',
        seriesField: 'type',
        data: { id: 'humidityData' },
        xField: 'date',
        yField: 'value',
      },
    ],
    axes: [
      {
        id: 'humidity-left',
        regionId: 'humidity',
        orient: 'left',
        // title: { visible: true, text: 'ES' },
        ...leftAxesCommonSpec,
      },
      {
        id: 'axes-bottom',
        regionId: ['humidity'],
        orient: 'bottom',
        label: {
          firstVisible: true,
          lastVisible: true,
          visible: true,
        },
        tick: { visible: false },
        paddingInner: 0.99,
        paddingOuter: 0,
      },
    ],
    data: [
      {
        id: 'humidityData',
        values: [
          { date: '周一', value: 36, type: 'maximum-humidity' },
          { date: '周二', value: 37, type: 'maximum-humidity' },
          { date: '周三', value: 38, type: 'maximum-humidity' },
          { date: '周四', value: 38, type: 'maximum-humidity' },
          { date: '周五', value: 40, type: 'maximum-humidity' },
          { date: '周一', value: 21, type: 'minimum-humidity' },
          { date: '周二', value: 21, type: 'minimum-humidity' },
          { date: '周三', value: 22, type: 'minimum-humidity' },
          { date: '周四', value: 23, type: 'minimum-humidity' },
          { date: '周五', value: 24, type: 'minimum-humidity' },
        ],
      },
    ],
  };

  return <Common {...spec} />;
}

export function Middle() {
  const config: LineProps = {
    title: {
      text: '多条折线图',
      subtext: '这是描述',
    },
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    data: {
      values: [
        { year: '2010', value: 510, category: 'Liquid fuel' },
        { year: '2010', value: 481, category: 'Solid fuel' },
        { year: '2010', value: 570, category: 'Gas flarinl' },
        { year: '2011', value: 513, category: 'Liquid fuel' },
        { year: '2011', value: 405, category: 'Solid fuel' },
        { year: '2011', value: 164, category: 'Gas flarinl' },
        { year: '2012', value: 320, category: 'Liquid fuel' },
        { year: '2012', value: 410, category: 'Solid fuel' },
        { year: '2012', value: 250, category: 'Gas flarinl' },
        { year: '2013', value: 222, category: 'Liquid fuel' },
        { year: '2013', value: 512, category: 'Solid fuel' },
        { year: '2013', value: 408, category: 'Gas flarinl' },
        { year: '2014', value: 428, category: 'Liquid fuel' },
        { year: '2014', value: 111, category: 'Solid fuel' },
        { year: '2014', value: 568, category: 'Gas flarinl' },
        { year: '2015', value: 428, category: 'Liquid fuel' },
        { year: '2015', value: 111, category: 'Solid fuel' },
        { year: '2015', value: 568, category: 'Gas flarinl' },
      ],
    },
    legends: {
      visible: true,
      position: 'end',
      orient: 'top',
    },
    point: {
      style: {
        fill: 'white',
        shape: 'circle',
        strokeWidth: 1,
        stroke: {
          scale: 'color',
          field: 'category',
        },
      },
    },
  };

  return <Line {...config} />;
}
