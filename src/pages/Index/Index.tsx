import React, { useEffect, useRef } from 'react';
import './Index.scss';
import { Home } from '../../components/Home/Home';
import { Footer } from '../../components/Footer/Footer';
import { Welcome } from '../../components/Welcome/Welcome';
import { About } from '../../components/About/About';
import { PictureBanner } from '../../components/PictureBanner/PictureBanner';
import { DropDownMenu } from '../../components/DropDownMenu/DropDownMenu';
import { useLocation } from 'react-router';

export const Index = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const location = useLocation();

  const scrollToElement = () => {
    const { current } = aboutRef;
    if (current !== null) {
      current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to the about section if the location hash is #about
  useEffect(() => {
    if (location.hash === '#about') {
      scrollToElement();
    }
  }, [location]);

  return (
    <>
      <DropDownMenu />
      <Home />
      <Welcome />
      <About ref={aboutRef} />
      <PictureBanner />
      <Footer scrollToAbout={scrollToElement} />
    </>
  );
};
