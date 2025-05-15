import { createBrowserRouter } from 'react-router';
import App from '@/App';
import { Suspense } from 'react';
import Home from '@/pages/home/Home';
import Contacts from '@/pages/contacts/Contacts';

export default createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<h2>loading</h2>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'contacts',
        element: (
          <Suspense fallback={<h2>loading</h2>}>
            <Contacts />
          </Suspense>
        ),
      },
    ],
  },
]);
