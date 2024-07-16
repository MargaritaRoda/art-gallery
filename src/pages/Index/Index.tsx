import React from 'react';
import './Index.scss';
import { Home } from '../../components/Home/Home';
import { Footer } from '../../components/Footer/Footer';
import { Welcome } from '../../components/Welcome/Welcome';
import { About } from '../../components/About/About';
import { PictureBanner } from '../../components/PictureBanner/PictureBanner';
import { DropDownMenu } from '../../components/DropDownMenu/DropDownMenu';

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
