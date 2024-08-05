import type { BaseConfig } from '@ant-design/plots';
import { get, keys, merge, reduce } from 'lodash';
import { COLORS_LARGE, COLORS_MIDDLE, COLORS_SMALL } from '../style';
import { BaseLegend } from '../types';

const reg = /left:.+?;/;

const colorObj = {
  small: COLORS_SMALL,
  middle: COLORS_MIDDLE,
  large: COLORS_LARGE,
};

const sizeObj = {
  small: 8,
  middle: 16,
  large: 24,
};

type ColorType = 'small' | 'middle' | 'large';

type Config = BaseConfig<any>;

export type ColorMap = Record<string, string>;

export const mergeConfig = (
  config: Config,
  data:
    | Record<string, any>[]
    | {
        name: string;
        children: Record<string, any>[];
      }
    | undefined,
) => {
  // TODO 这里是默认配置,各个组件默认配置不同，定义不同的配置项
  // TODO 这里先不用UI规范，默认空对象，接收传入配置
  const defaultConfig = {};

  // TODO any需要替换，类型需要兼容所有组件的类型分类
  return merge({}, defaultConfig, config, {
    data,
  }) as any;
};

/**
 * 生成自定义颜色
 */
export const generateColorMap = (
  colors: ColorMap,
  type: ColorType = 'small',
  customsColors?: string[], // 自定义
) => {
  return reduce(
    keys(colors),
    (res, key, index) => {
      res[key] = customsColors
        ? customsColors[index % customsColors.length]
        : colorObj[type][index % sizeObj[type]];
      return res;
    },
    colors,
  );

  return colors;
};

interface Calculate {
  className: string;
  type: string;
  newConfig: any;
  legend: BaseLegend | boolean;
  defaultHeight: number;
  extraWidth?: number;
}

export const calculateOffset = ({
  className,
  type,
  newConfig,
  legend,
  defaultHeight,
  extraWidth = 48,
}: Calculate) => {
  let leftPadding = 0,
    rightPadding = 0;

  const pieWidth =
    // @ts-ignore
    (document.querySelector(
      `${className ? `.${className}.sen-${type}` : `.sen-${type}`}`,
    )?.clientWidth ?? 300) - extraWidth;
  const width = newConfig.width ?? defaultHeight;

  if (
    typeof legend === 'object' &&
    (legend?.direction === 'alone' || legend?.direction === 'horizontal')
  ) {
    // setLeftPadding((pieWidth - width) / 2);
    // setRightPadding(0);
  } else if (get(legend, 'direction') === 'left') {
    let curStyle = document
      .querySelector(
        `${
          className
            ? `.${className} .sen-charts-legend`
            : `.sen-${type} .sen-charts-legend`
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
            : `.sen-${type} .sen-charts-legend`
        }`,
      )
      ?.setAttribute(
        'style',
        `${'position: absolute; left: 0;' + curStyle || ''}`,
      );
    leftPadding = pieWidth - width;
    rightPadding = 0;
  } else {
    const legendWidth =
      document.querySelector(
        `${
          className
            ? `.${className} .sen-charts-legend`
            : `.sen-${type} .sen-charts-legend`
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
            : `.sen-${type} .sen-charts-legend`
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
            : `.sen-${type} .sen-charts-legend`
        }`,
      )
      ?.setAttribute(
        'style',
        `${`position: absolute; left: ${left}px;${curStyle || ''}`}`,
      );

    leftPadding = 0;
    rightPadding = legendRightPadding;
  }

  return { width: pieWidth, leftPadding, rightPadding };
};
