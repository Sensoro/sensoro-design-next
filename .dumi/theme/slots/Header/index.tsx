import React, { useContext } from 'react';
import { Row, Col, } from 'antd';
import { ClassNames, css } from '@emotion/react';
import { useLocation, useSiteData } from 'dumi';
import GithubFilled from '@sensoro-design/icons/GithubFilled';
import SiteContext from '../SiteContext';

import DumiSearchBar from 'dumi/theme-default/slots/SearchBar';

import { Logo } from './Logo';
import { SwitchBtn } from './SwitchBtn';
import { Navigation } from './Navigation';

import { useSiteToken } from '../../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  const searchIconColor = '#ced4d9';

  return {
    header: css({
      position: 'relative',
      zIndex: 10,
      maxWidth: '100%',
      background: token.colorWhite,
      boxShadow: token.boxShadowTertiary,

      '@media only screen and (max-width: ${token.mobileMaxWidth}px)': {
        textAlign: 'center',
      },

      '.nav-search-wrapper': {
        display: 'flex',
        flex: 'auto'
      },

      '.dumi-default-search-bar': {
        borderInlineStart: '1px solid rgba(0, 0, 0, 0.06)',

        '> svg': {
          width: 14,
          fill: searchIconColor,
        },

        '> input': {
          height: 22,
          border: 0,

          '&:focus': {
            boxShadow: 'none',
          },

          '&::placeholder': {
            color: searchIconColor
          },

          '.dumi-default-search-shortcut': {
            color: searchIconColor,
            backgroundColor: 'rgba(150, 150, 150, 0.06)',
            borderColor: 'rgba(100, 100, 100, 0.2)',
            borderRadius: 4,
          },

          '.dumi-default-search-popover': {
            insetInlineStart: 11,
            insetInlineEnd: 'unset',

            '&::before': {
              insetInlineStart: 100,
              insetInlineEnd: 'unset',
            }
          }
        }
      }
    }),
    menuRow: css({
      display: 'flex',
      alignItems: 'center',
      margin: 0,

      '> *': {
        flex: 'none',
        margin: 0,
        marginInlineEnd: 12,

        '&:last-child': {
          marginInlineEnd: 40,
        }
      }
    }),
  };
}

export const Header: React.FC = () => {
  const location = useLocation();
  const styles = useStyle();

  const { pathname, search } = location;
  const { direction, isMobile, updateSiteConfig } = useContext(SiteContext);
  const isHome = ['', 'index', 'index-cn'].includes(pathname);

  const colProps = isHome
    ? [{ flex: 'none' }, { flex: 'auto' }]
    : [
        { xxl: 4, xl: 5, lg: 6, md: 6, sm: 24, xs: 24 },
        { xxl: 20, xl: 19, lg: 18, md: 18, sm: 0, xs: 0 },
      ];

  const navigationNode = (
    <Navigation
      key="nav"
      // {...sharedProps}
      // responsive={responsive}
      isMobile={isMobile}
      // directionText={nextDirectionText}
      // onLangChange={onLangChange}
      // onDirectionChange={onDirectionChange}
    />
  );

  let menu = [
    navigationNode,
    <a
      key="github"
      href="https://github.com/sensoro-design/sensoro-design-next"
      target="_blank"
      rel="noreferrer"
    >
      <SwitchBtn value={1} label1={<GithubFilled />} tooltip1="Github" label2={null} pure />
    </a>,
  ];

  return (
    <header css={styles.header}>
      <Row style={{ flexFlow: 'nowrap', height: 64 }}>
        <Col {...colProps[0]}>
          <Logo />
        </Col>
        <Col {...colProps[1]} css={styles.menuRow}>
          <div className="nav-search-wrapper">
            <DumiSearchBar />
          </div>
          {menu}
        </Col>
      </Row>
    </header>
  )
}

export default Header;
