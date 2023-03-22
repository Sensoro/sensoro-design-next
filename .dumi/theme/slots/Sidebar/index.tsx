import React, { useContext } from 'react';
import { Col, Menu, } from 'antd';
import { css } from '@emotion/react';
import { useSidebarData } from 'dumi';

import SiteContext from '../SiteContext';
import { useMenu } from '../../../hooks/useMenu';
import { useSiteToken } from '../../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    asideContainer: css({
      minHeight: '100%',
      paddingBottom: 48,
      fontFamily: `Avenir, ${token.fontFamily}, sans-serif`,

      [`&${token.antCls}-menu-inline`]: {
        [`
          ${token.antCls}-menu-submenu-title h4,
          > ${token.antCls}-menu-item,
          ${token.antCls}-menu-item a
        `]: {
          overflow: 'hidden',
          fontSize: 14,
          textOverflow: 'ellipsis',
        },

        [`
          > ${token.antCls}-menu-item-group
          > ${token.antCls}-menu-item-group-title
        `]: {
          marginTop: 16,
          marginBottom: 16,
          fontSize: 13,

          '&::after': {
            position: 'relative',
            top: 12,
            display: 'block',
            width: 'calc(100% - 20px)',
            height: 1,
            background: `rgb(241 237 237)`,
            content: '""',
          },
        },

        [`
          > ${token.antCls}-menu-item,
          > ${token.antCls}-menu-submenu
          > ${token.antCls}-menu-submenu-title,
          > ${token.antCls}-menu-item-group
          > ${token.antCls}-menu-item-group-title,
          > ${token.antCls}-menu-item-group
          > ${token.antCls}-menu-item-group-list
          > ${token.antCls}-menu-item,
          &${token.antCls}-menu-inline
          > ${token.antCls}-menu-item-group
          > ${token.antCls}-menu-item-group-list
          > ${token.antCls}-menu-item
        `]: {
          paddingLeft: '40px !important',

          [`${token.antCls}-row-rtl &`]: {
            paddingRight: '40px !important',
            paddingLeft: '16px !important'
          }
        },

        [`&${token.antCls}-menu-inline`]: {
          [`${token.antCls}-menu-item-group-title`]: {
            marginLeft: 4,
            paddingLeft: 60,

            [`${token.antCls}-row-rtl &`]: {
              paddingLeft: 16,
              paddingRight: 60,
            }
          },

          [`${token.antCls}-menu-item-group-list > ${token.antCls}-menu-item`]: {
            paddingLeft: 80,

            [`${token.antCls}-row-rtl &`]: {
              paddingLeft: 16,
              paddingRight: 80,
            }
          },
        },

        [`${token.antCls}-menu-item-group:first-of-type`]: {
          [`${token.antCls}-menu-item-group-title`]: {
            marginTop: 0,
          }
        }
      },

      'a[disabled]': {
        color: '#ccc',
      },

      '.chinese': {
        marginLeft: 6,
        fontWeight: 'normal',
        fontSize: 12,
        opacity: 0.67,
      }
    }),
    mainMenu: css({
      zIndex: 1,

      '.main-menu-inner': {
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100%',
        maxHeight: '100vh',
        overflow:'hidden',
      },

      '&:hover .main-menu-inner': {
        overflowY: 'auto',
      }
    })
  }
}

const Sidebar: React.FC = () => {
  const styles = useStyle();
  const sidebarData = useSidebarData();
  const { isMobile } = useContext(SiteContext);
  const [menuItems, selectedKey] = useMenu();

  const {
    token: { colorBgContainer },
  } = useSiteToken();

  const menuChild = (
    <Menu
      items={menuItems}
      inlineIndent={30}
      css={styles.asideContainer}
      mode="inline"
      // theme={isDark ? 'dark' : 'light'}
      selectedKeys={[selectedKey]}
      defaultOpenKeys={sidebarData?.map(({ title }) => title).filter((item) => item) as string[]}
    />
  )

  return (
    <Col xxl={4} xl={5} lg={6} md={6} sm={24} xs={24} css={styles.mainMenu}>
      <section className="main-menu-inner">{menuChild}</section>
    </Col>
  )
}

export default Sidebar;
