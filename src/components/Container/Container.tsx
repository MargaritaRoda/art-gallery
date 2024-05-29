import React from 'react';
import classNames from 'classnames';
import './Container.scss';

type container = {
  className?: string;
  children?: React.ReactNode;
};
export const Container = ({ className, children }: container) => {
  return <div className={classNames('container', className)}>{children}</div>;
};
