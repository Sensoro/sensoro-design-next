import { createContext } from '@lotus-design/react-primitives/es/context';

interface ConfigContextValue {
  prefixCls?: string;
  getPrefixCls?: (componentName: string, customPrefix?: string) => string;
}

export const DefaultConfigContextValue: ConfigContextValue = {
  prefixCls: 's',
  getPrefixCls: (componentName: string, customPrefix?: string) =>
    `${customPrefix || 's'}-${componentName}`,
};

const [ConfigContextProvider, useConfigContext] = createContext<ConfigContextValue>('ConfigProvider', DefaultConfigContextValue);

export {
  ConfigContextProvider,
  useConfigContext,
};
