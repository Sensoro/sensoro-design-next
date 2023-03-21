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
