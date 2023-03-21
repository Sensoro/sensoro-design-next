import React from 'react';
import { css } from '@emotion/react';
import { Link, useSiteData } from 'dumi';
import { useSiteToken } from '../../../hooks/useSiteToken';

export interface LogoProps {
  isZhCN?: boolean;
}

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    logo: css({
      height: token.headerHeight,
      paddingInlineStart: 40,
      overflow: 'hidden',
      color: token.colorTextHeading,
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily: `${token.fontFamily}, sans-serif`,
      lineHeight: token.headerHeight,
      letterSpacing: -0.18,
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',

      img: {
        height: 32,
        verticalAlign: 'middle',
        marginInlineEnd: 12
      },

      '@media only screen and (max-width: ${mobileMaxWidth}px)': {
        paddingInlineStart: 0,
        paddingInlineEnd: 0,
      }
    }),
    title: {
      lineHeight: 32,
    },
  }
}

export const Logo: React.FC<LogoProps> = ({ isZhCN }) => {
  const styles = useStyle();
  const { themeConfig } = useSiteData();

  return (
    <h1>
      <Link to="/" css={styles.logo}>
        {themeConfig?.logo && (
          <img src={themeConfig.logo} alt="logo" />
        )}
        <span css={styles.title}>{themeConfig.name}</span>
      </Link>
    </h1>
  )
}
