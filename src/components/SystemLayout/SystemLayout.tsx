import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

export const SystemLayout = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};
