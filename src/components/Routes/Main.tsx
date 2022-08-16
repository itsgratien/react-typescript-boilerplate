import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing/Landing';
import NotFound from '../Pages/NotFound/NotFound';

const Main = () => {
  return (
    <Routes>
      <Route element={<Landing />} path="/" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
};
export default Main;
