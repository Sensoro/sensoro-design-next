import React from 'react';
import { css } from '@emotion/react';
import Content from '../../slots/Content';
import Sidebar from '../../slots/Sidebar';
import { CommonHelmet } from '../../common/CommonHelmet';

const useStyle = () => ({
  main: css({
    display: 'flex',
    marginTop: 40,
  }),
});

export const SidebarLayout: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const styles = useStyle();

  return (
    <main css={styles.main}>
      <CommonHelmet />
      <Sidebar />
      <Content>{props.children}</Content>
    </main>
  );
}

export default SidebarLayout;
