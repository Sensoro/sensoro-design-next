import React from 'react';
import { css } from '@emotion/react';
import DumiFooter from 'dumi/theme-default/slots/Footer';

import { useSiteToken } from '../../../hooks/useSiteToken';

const useStyle = () => {
  const { token } = useSiteToken();

  return {
    header: css({
      position: 'relative',
      zIndex: 10,
      maxWidth: '100%',
    })
  };
}

const Footer: React.FC = () => {
  return (
    <DumiFooter />
  )
}

export default Footer;
