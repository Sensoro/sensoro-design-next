import { createBrowserRouter, Navigate } from 'react-router-dom';
import ScrollAreaRoutes from './ScrollAreaRoutes'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to="/scroll-area"  />
    },
    ScrollAreaRoutes,
  ],
  { basename: import.meta.env.BASE_URL }
)

export default router;