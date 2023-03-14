import { defaultConfig, useToken as useInternalToken } from './internal';
import type { GlobalToken } from './interface';

export { type GlobalToken };

function useToken() {
  const [theme, token, hashId] = useInternalToken();

  return { theme, token, hashId };
}

export const theme = {
  defaultConfig,
  useToken,
}
