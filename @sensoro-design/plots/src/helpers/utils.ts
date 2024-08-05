import { deepMix } from '@antv/util';
import { isBoolean, isObject } from '@rcuse/shared';

export function getItemConfig<C extends object>(userConfig: C | boolean, defaultConfig: C = {} as C) {
  let config: C | undefined;

  if (isBoolean(userConfig) && userConfig) {
    config = deepMix({}, defaultConfig);
  }

  if (isObject(userConfig)) {
    config = deepMix({}, defaultConfig, userConfig);
  }

  return config;
}
