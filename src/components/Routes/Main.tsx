import React from 'react';
import { useRoutes } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import NotFound from '../Pages/NotFound/NotFound';

const Main = () => {
  const routes = useRoutes([
    {
      element: <Landing />,
      path: '/',
      index: true,
    },
    {
      element: <NotFound />,
      path: '*',
    },
  ]);

  return routes;
};
export default Main;
