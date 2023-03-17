import { css } from '@emotion/react';
import { useSiteToken } from '../../../hooks/useSiteToken';

export const useStyle = () => {
  const { token } = useSiteToken();

  return {
    tokenColor: css({
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
    }),
    item: css({
      position: 'relative',
      cursor: 'pointer',
      flex: 1,
      boxSizing: 'border-box',
      background: token.colorFillTertiary,
      marginRight: 0,
      lineHeight: 'normal',
      borderRadius: 0,
    }),
    color: css({
      position: 'relative',
      height: 50,
    }),
    info: css({
      position: 'relative',
      padding: `8px`,
      color: token.colorText,

      [`span`]: {
        display: 'block'
      },

      [`span:first-of-type`]: {
        fontSize: 12,
        color: token.colorTextSecondary,
        paddingBottom: 4,
      }
    }),
  };
};
