import React, { useMemo, useState, } from 'react';
import { classNames } from '@pansy/shared';
import { css } from '@emotion/react';
import { Affix, Anchor, Col, Typography, } from 'antd';
import { useRouteMeta, useLocation, useTabMeta } from 'dumi';

import { useSiteToken } from '../../../hooks/useSiteToken';
import Footer from '../Footer';
import DemoContext from '../DemoContext';

import type { DemoContextProps } from '../DemoContext';

type AnchorItem = {
  id: string;
  title: string;
  children?: AnchorItem[];
};

const useStyle = () => {
  const { token } = useSiteToken();
  const { antCls } = token;

  return {
    header: css({
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 120,
    }),
    articleWrapper: css({
      padding: '0 170px 32px 64px'
    }),
    toc: css`
      ${antCls}-anchor {
        ${antCls}-anchor-link-title {
          font-size: 12px;
        }
      }
    `,
    tocWrapper: css({
      position: 'absolute',
      top: 8,
      right: 0,
      width: 160,
      margin: '12px 0',
      padding: '8px 8px 8px 4px',
      backdropFilter: 'blur(8px)',
      borderRadius: token.borderRadius,
      boxSizing: 'border-box',

      '.toc-debug': {
        color: token.purple6,

        '&:hover': {
          color: token.purple5,
        }
      },

      '> div': {
        boxSizing: 'border-box',
        width: '100%',
        maxHeight: `calc(100vh - 40px) !important`,
        margin: '0 auto',
        overflow: 'auto',
        paddingInline: 4,
      }
    }),
  };
}

const Content: React.FC<{ children: React.ReactNode }> = (props) => {
  const { pathname } = useLocation();
  const { token } = useSiteToken();
  const meta = useRouteMeta();
  const tab = useTabMeta();
  const styles = useStyle();

  const [showDebug, setShowDebug] = useState(false);
  const debugDemos = useMemo(
    () => meta.toc?.filter((item) => item._debug_demo).map((item) => item.id) || [],
    [meta],
  );

  const anchorItems = useMemo(
    () =>
      (tab?.toc || meta.toc).reduce<AnchorItem[]>((result, item) => {
        if (item.depth === 2) {
          result.push({ ...item });
        } else if (item.depth === 3) {
          const parent = result[result.length - 1];
          if (parent) {
            parent.children = parent.children || [];
            parent.children.push({ ...item });
          }
        }
        return result;
      }, []),
    [tab?.toc, meta.toc],
  );

  const contextValue = useMemo<DemoContextProps>(
    () => ({ showDebug, setShowDebug }),
    [showDebug, debugDemos],
  );

  return (
    <DemoContext.Provider value={contextValue}>
      <Col xxl={20} xl={19} lg={18} md={18} sm={24} xs={24}>
        <Affix>
          <section css={styles.tocWrapper}>
            <Anchor
              css={styles.toc}
              affix={false}
              targetOffset={token.marginXXL}
              showInkInFixed
              items={anchorItems.map((item) => ({
                href: `#${item.id}`,
                title: item.title,
                key: item.id,
                children: item.children
                  ?.filter((child) => showDebug || !debugDemos.includes(child.id))
                  .map((child) => ({
                    key: child.id,
                    href: `#${child.id}`,
                    title: (
                      <span className={classNames(debugDemos.includes(child.id) && 'toc-debug')}>
                        {child?.title}
                      </span>
                    ),
                  })),
              }))}
            />
          </section>
        </Affix>
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
