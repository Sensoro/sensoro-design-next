import React from 'react';
import { css } from '@emotion/react';
import Content from '../../slots/Content';
import Sidebar from '../../slots/Sidebar';

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
      <Sidebar />
      <Content>{props.children}</Content>
    </main>
  );
}

export default SidebarLayout;
