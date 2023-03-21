import { useContext } from 'react';
import { theme } from 'sensoro-design';
import { ConfigContext } from 'sensoro-design/es/config-provider';

const { useToken } = theme;

export const useSiteToken = () => {
  const result = useToken();
  const { token } = result;
  const { getPrefixCls, iconPrefixCls } = useContext(ConfigContext);
  const siteMarkdownCodeBg = token.colorFillTertiary;

  const rootPrefixCls = getPrefixCls();

  return {
    ...result,
    token: {
      ...token,
      headerHeight: 64,
      menuItemBorder: 2,
      mobileMaxWidth: 767.99,
      siteMarkdownCodeBg,
      senCls: `.${rootPrefixCls}`,
      iconCls: `.${iconPrefixCls}`,
      antCls: '.ant',
      codeFamily: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
    },
  }
}
