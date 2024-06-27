import { Navigate } from 'react-router-dom';
import type { RouteObject } from './types';
import Basic from '@/pages/scroll-area/basic';
import Example1 from '@/pages/scroll-area/example1';

const ScrollAreaRoutes: RouteObject = {
  path: '/scroll-area',
  children: [
    {
      path: '/scroll-area',
      element: <Navigate to="/scroll-area/basic" />,
    },
    {
      path: 'basic',
      element: <Basic />,
    },
    {
      path: 'example1',
      element: <Example1 />,
    },
  ],
};

export default ScrollAreaRoutes;
