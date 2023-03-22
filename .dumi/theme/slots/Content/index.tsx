import React, { useMemo, useState, } from 'react';
import { css } from '@emotion/react';
import { Col, Typography } from 'antd';
import { useRouteMeta, useLocation } from 'dumi';

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
    `,
  };
}

const Content: React.FC<{ children: React.ReactNode }> = (props) => {
  const { pathname } = useLocation();
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
          {meta.frontmatter?.title ? (
            <Typography.Title style={{ fontSize: 30 }}>
              {meta.frontmatter?.title}
              {meta.frontmatter.subtitle && (
                <span style={{ marginLeft: 12 }}>{meta.frontmatter.subtitle}</span>
              )}
            </Typography.Title>
          ) : null}
          {props.children}
        </article>
        <Footer />
      </Col>
    </DemoContext.Provider>
  )
}

export default Content;
