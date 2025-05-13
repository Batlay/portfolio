import { createBrowserRouter } from 'react-router';
import App from '@/components/App';
import { LazyShop } from '@/pages/shop/Shop.lazy';
import { LazyAbout } from '@/pages/about/About.lazy';
import { Suspense } from 'react';

export default createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        path: 'shop',
        element:  <Suspense fallback={<h2>loading</h2>}>
          <LazyShop />
          </Suspense>,
      },
      {
        path: 'about',
        element: <Suspense fallback={<h2>loading</h2>}>
          <LazyAbout />
        </Suspense>,
      },
    ],
  },
]);