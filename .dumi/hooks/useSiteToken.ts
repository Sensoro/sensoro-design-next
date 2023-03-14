import { useContext } from 'react';
import { theme } from 'sensoro-design';
import { ConfigContext } from 'sensoro-design/es/config-provider';

const { useToken } = theme;

export const useSiteToken = () => {
  const result = useToken();
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);

  const rootPrefixCls = getPrefixCls();
  const { token } = result;

  return {
    ...result,
    token: {
      ...token,
      senCls: `.${rootPrefixCls}`,
    },
  }
}
