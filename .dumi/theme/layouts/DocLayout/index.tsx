import React, { useEffect, useMemo, } from 'react';
import animateScrollTo from 'animated-scroll-to';
import {
  useLocation,
  useOutlet,
  useSiteData,
} from 'dumi';
import Header from '../../slots/Header';
import { GlobalStyles } from '../../common/GlobalStyles';
import { SidebarLayout } from '../SidebarLayout';

const DocLayout: React.FC = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const { pathname, search, hash } = location;
  const { loading } = useSiteData();


  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          // animated-scroll-to instead of native scroll
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300,
          });
        }
      }, 1);
    }
  }, [loading, hash]);

  const content = useMemo(() => {
    return <SidebarLayout>{outlet}</SidebarLayout>;
  }, [pathname, outlet]);

  return (
    <>
      <GlobalStyles />
      <Header />
      {content}
    </>
  );
};

export default DocLayout;
