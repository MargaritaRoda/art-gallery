import React from 'react';
import './Pictures.scss';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import gernikaJPG from '../../asset/gernika.jpg';
import { Container } from '../../components/Container/Container';
import { Footer } from '../../components/Footer/Footer';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { checkboxFields } from '../../services/config/checkboxFields';
import { PictureList } from '../../components/PictureList/PictureList';
import { gallery } from '../../services/db';

export const Pictures = () => {
  return (
    <Container>
      <ParallaxProvider>
        {/*<Container className="pictures-banner">*/}
        <ParallaxBanner
          layers={[{ image: gernikaJPG, speed: -30 }]}
          className="main-picture-banner"
        />
        {/*</Container>*/}
      </ParallaxProvider>
      {/*<Sidebar checkboxFields={checkboxFields} />*/}
      <PictureList items={gallery} isLoading={false} />
      <Footer />
    </Container>
  );
};
