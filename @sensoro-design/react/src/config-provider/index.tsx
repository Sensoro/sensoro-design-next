import React from 'react';
import { ConfigContextProvider } from './context';

export function ConfigProvider() {
  return <ConfigContextProvider value={config}>{child}</ConfigContextProvider>;
}
