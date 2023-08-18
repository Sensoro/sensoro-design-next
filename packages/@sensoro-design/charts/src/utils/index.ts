import type { BaseConfig } from '@ant-design/plots';
import { keys, merge, reduce } from 'lodash';
import { COLORS_LARGE, COLORS_MIDDLE, COLORS_SMALL } from '../style';

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
) => {
  return reduce(
    keys(colors),
    (res, key, index) => {
      res[key] = colorObj[type][index % sizeObj[type]];
      return res;
    },
    colors,
  );

  return colors;
};
