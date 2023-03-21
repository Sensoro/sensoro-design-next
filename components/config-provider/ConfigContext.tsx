import { createContext,  } from 'react';
import { SizeType } from './SizeContext';

import type { Locale } from '../locale';

export type DirectionType = 'ltr' | 'rtl' | undefined;

export const defaultPrefixCls = 's';
export const defaultIconPrefixCls = `${defaultPrefixCls}-icon`;

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `${defaultPrefixCls}-${suffixCls}` : defaultPrefixCls;
};

export interface ConfigContextProps {
  iconPrefixCls: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
  locale?: Locale;
  /**
   * 设置为 true 时，将在按钮 2 个汉字之间添加空格
   * @default false
   */
  autoInsertSpaceInButton?: boolean;
}

export const ConfigContext = createContext<ConfigContextProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
  iconPrefixCls: defaultIconPrefixCls,
  autoInsertSpaceInButton: false,
});

export const { Consumer: ConfigConsumer } = ConfigContext;
