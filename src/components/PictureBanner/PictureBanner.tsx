import React from 'react';
import './PictureBanner.scss';
import { Container } from '../Container/Container';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from 'react-scroll-parallax';
import gernikaJPG from '../../asset/gernika.jpg';
import { PICTURES } from '../../services/config/routs';

export const PictureBanner: React.FC = () => {
  return (
    <ParallaxProvider>
      <Container className="picture">
        <ParallaxBanner
          layers={[{ image: gernikaJPG, speed: -30 }]}
          className="picture-banner"
        >
          <div className="picture-banner__title-wrapper">
            <h1 className="picture-banner__title">
              We bring <br /> you the <br /> best
            </h1>
            <div className="btn-wrapper">
              <a href={PICTURES}>
                <button className="btn">GALLERY</button>
              </a>
            </div>
          </div>
        </ParallaxBanner>
      </Container>
    </ParallaxProvider>
  );
};
