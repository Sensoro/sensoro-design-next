import { Navigate } from 'react-router-dom';
import type { RouteObject } from './types';
import Basic from '@/pages/pin-code/basic';

const PinCodeRoutes: RouteObject = {
  path: '/pin-code',
  children: [
    {
      path: '/pin-code',
      element: <Navigate to="/pin-code/basic" />,
    },
    {
      path: 'basic',
      element: <Basic />,
    },
  ],
};

export default PinCodeRoutes;
