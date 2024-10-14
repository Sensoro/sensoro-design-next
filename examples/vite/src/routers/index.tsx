import { Navigate, createBrowserRouter } from 'react-router-dom';
import ScrollAreaRoutes from './ScrollAreaRoutes';
import AspectRatioRoutes from './AspectRatioRoutes';
import DividerRoutes from './DividerRoutes';
import PinCodeRoutes from './PinCodeRoutes';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to="/scroll-area" />,
    },
    ScrollAreaRoutes,
    AspectRatioRoutes,
    DividerRoutes,
    PinCodeRoutes,
  ],
  { basename: import.meta.env.BASE_URL },
);

export default router;
