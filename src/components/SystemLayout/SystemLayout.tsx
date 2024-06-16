import React from 'react';
import { Outlet } from 'react-router-dom';

export const SystemLayout = () => {
  return (
    // <Provider store={}>
    <Outlet />
    // </Provider>
  );
};
