import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Outlet } from 'react-router-dom';
interface SystemLayoutProps {
  // children: ReactNode;
}

export const SystemLayout: React.FC<SystemLayoutProps> = () => {
  return (
    <>
      <Provider store={store}>
        <Outlet />
      </Provider>
    </>
  );
};
