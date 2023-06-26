import type { BaseConfig } from '@ant-design/plots';
import { merge } from 'lodash';

type Config = BaseConfig<any>;

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
