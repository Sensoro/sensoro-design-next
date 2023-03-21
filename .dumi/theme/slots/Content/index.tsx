import React, { useMemo, useState, } from 'react';
import { css } from '@emotion/react';
import { Affix, Anchor, Avatar, Col, Skeleton, Space, Tooltip, Typography } from 'antd';
import { useRouteMeta, useTabMeta } from 'dumi';
import DumiContent from 'dumi/theme-default/slots/Content';

import { useSiteToken } from '../../../hooks/useSiteToken';
import Footer from '../Footer';
import DemoContext from '../DemoContext';

import type { DemoContextProps } from '../DemoContext';

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    header: css({
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 120,
    }),
    articleWrapper: css`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: ${token.screenLG}px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `,
  };
}

const Content: React.FC<{ children: React.ReactNode }> = (props) => {
  const tab = useTabMeta();
  const meta = useRouteMeta();
  const styles = useStyle();

  const [showDebug, setShowDebug] = useState(false);
  const debugDemos = useMemo(
    () => meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
    [meta],
  );

  const contextValue = useMemo<DemoContextProps>(
    () => ({ showDebug, setShowDebug }),
    [showDebug, debugDemos],
  );

  return (
    <DemoContext.Provider value={contextValue}>
      <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
        <article css={styles.articleWrapper}>
          {props.children}
        </article>
      </Col>
    </DemoContext.Provider>
  )
}

export default Content;
