import { derivative as defaultMap } from 'sensoro-design/es/theme/themes/default';
import { seedToken as seed } from 'sensoro-design/es/theme/themes/seed';
import { formatToken } from 'sensoro-design/es/theme/utils/alias';

import type { GlobalToken, MapToken } from 'sensoro-design/es/theme/interface';

export function getDesignToken(config: any = {}): GlobalToken {
  const seedToken = { ...seed, ...config.token };
  const mapFn = config.algorithm ?? defaultMap;
  const mapToken = Array.isArray(mapFn)
    ? mapFn.reduce<MapToken>(
        (result, fn) => fn(seedToken, result),
        undefined as any,
      )
    : mapFn(seedToken);
  const mergedMapToken = {
    ...mapToken,
    ...config.components,
    override: config.token ?? {},
  };

  return formatToken(mergedMapToken);
}
