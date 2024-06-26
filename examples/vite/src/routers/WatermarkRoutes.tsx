import { Navigate } from 'react-router-dom'
import Basic from '@/pages/watermark/basic'
import type { RouteObject } from './types';

const WatermarkRoutes: RouteObject = {
  path: '/watermark',
  children: [
    {
      path: '/watermark',
      element: <Navigate to="/watermark/basic"  />
    },
    {
      path: 'basic',
      element: <Basic />
    }
  ],
}

export default WatermarkRoutes;
