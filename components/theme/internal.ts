import React, { useContext, createContext } from 'react';
import { createTheme, useCacheToken, useStyleRegister } from '@ant-design/cssinjs';
import { version } from '../version';
import { formatToken } from './utils/alias';
import { derivative as defaultDerivative } from './themes/default';
import { seedToken as defaultSeedToken } from './themes/seed';
import statisticToken, { merge as mergeToken, statistic } from './utils/statistic';
import { genComponentStyleHook } from './utils/genComponentStyleHook';

import type { CSSInterpolation, Theme, } from '@ant-design/cssinjs';
import type { FullToken } from './utils/genComponentStyleHook';
import type {
  AliasToken,
  GlobalToken,
  PresetColorType,
  PresetColorKey,
  SeedToken,
  MapToken,
  OverrideToken,
} from './interface';

const defaultTheme = createTheme(defaultDerivative);

// ================================ Context =================================
export interface DesignTokenContextType {
  token: Partial<AliasToken>;
  theme?: Theme<SeedToken, MapToken>;
  components?: OverrideToken;
  hashed?: string | boolean;
}

export const defaultConfig = {
  token: defaultSeedToken as DesignTokenContextType['token'],
  hashed: false,
};

export const DesignTokenContext = createContext<DesignTokenContextType>(defaultConfig);

// ================================== Hook ==================================
export function useToken(): [Theme<SeedToken, MapToken>, GlobalToken, string] {
  const {
    token: rootDesignToken,
    hashed,
    theme,
    components,
  } = useContext(DesignTokenContext);

  const salt = `${version}-${hashed || ''}`;
  const mergedTheme = theme || defaultTheme;

  const [token, hashId] = useCacheToken(
    mergedTheme,
    [defaultSeedToken, rootDesignToken],
    {
      salt,
      override: { override: rootDesignToken, ...components },
      formatToken,
    },
  );

  return [mergedTheme, token, hashed ? hashId : ''];
}

export type UseComponentStyleResult = [(node: React.ReactNode) => React.ReactElement, string];
export type GenerateStyle<
  ComponentToken extends object = AliasToken,
  ReturnType = CSSInterpolation,
> = (token: ComponentToken) => ReturnType;
export {
  // Statistic
  statistic,
  statisticToken,
  mergeToken,
  // hooks
  useStyleRegister,
  genComponentStyleHook,
}
export type {
  PresetColorType,
  PresetColorKey,
  SeedToken,
  AliasToken,
  FullToken,
}

