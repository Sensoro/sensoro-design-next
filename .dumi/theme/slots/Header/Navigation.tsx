import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation, useNavData } from 'dumi';
import { css } from '@emotion/react';

import { useSiteToken } from '../../../hooks/useSiteToken';

import type { MenuProps } from 'antd';

export interface NavigationProps {
  isMobile: boolean;
}

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    nav: css({
      height: '100%',
      fontSize: 14,
      fontFamily: `Avenir, ${token.fontFamily}, sans-serif`,
      border: 0,

      [`&${token.antCls}-menu-horizontal`]: {
        borderBottom: 'none',

        [`& > ${token.antCls}-menu-item, & > ${token.antCls}-menu-submenu`]: {
          minWidth: 40 + 12 * 2,
          height: token.headerHeight,
          paddingRight: 12,
          paddingLeft: 12,
          lineHeight: `${token.headerHeight}px`,

          '&::after': {
            top: 0,
            right: 12,
            bottom: 'auto',
            left: 12,
            borderWidth: token.menuItemBorder,
          }
        },

        [`& ${token.antCls}-menu-submenu-title ${token.iconCls}`]: {
          margin: 0,
        },

        [`& > ${token.antCls}-menu-item-selected`]: {
          'a': {
            color: token.colorPrimary,
          }
        }
      },

      [`& > ${token.antCls}-menu-item, & > ${token.antCls}-menu-submenu`]: {
        textAlign: 'center',
      }
    })
  }
}

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { isMobile } = props;
  const styles = useStyle();
  const { pathname } = useLocation();
  const menuMode = isMobile ? 'inline' : 'horizontal';
  const navData = useNavData();

  const module = pathname
    .split('/')
    .filter((path) => path)
    .slice(0, 1)
    .join('/');

  let activeMenuItem = `/${module}` || 'home';

  if (pathname.startsWith('/changelog')) {
    activeMenuItem = 'docs/react';
  } else if (pathname.startsWith('/docs/resources')) {
    activeMenuItem = 'docs/resources';
  }

  const items: MenuProps['items'] = navData.map((nav) => {
    return {
      label: (
        <Link to={nav.link}>
          {nav.title}
        </Link>
      ),
      key: nav.link,
    }
  })

  return (
    <Menu
      mode={menuMode}
      selectedKeys={[activeMenuItem]}
      css={styles.nav}
      disabledOverflow
      items={items}
      style={{ borderRight: 0 }}
    />
  );
}
