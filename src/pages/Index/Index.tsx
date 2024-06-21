import React from 'react';
import './Index.scss';
import { Home } from '../../components/Home/Home';
import { Footer } from '../../components/Footer/Footer';
import { Welcome } from '../../components/Welcome/Welcome';
import { About } from '../../components/About/About';
import { PictureBanner } from '../../components/PictureBanner/PictureBanner';
import { DropDownMenu } from '../../components/DropDownMenu/DropDownMenu';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/selectors/user.selector';
import { SIGNUP } from '../../services/config/routs';
import { redirect } from 'react-router-dom';

export const Index = () => {
  // const selectedUser = useSelector(selectUser);
  // if (!selectedUser) {
  //   return redirect(SIGNUP);
  // }
  return (
    <>
      <DropDownMenu />
      <Home />
      <Welcome />
      <About />
      <PictureBanner />
      <Footer />
    </>
  );
};
