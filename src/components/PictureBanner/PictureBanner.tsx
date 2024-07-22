import React from 'react';
import './PictureBanner.scss';
import { Container } from '../Container/Container';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import bannerImgPNG from '../../asset/bannerImg.png';
import { PICTURES } from '../../services/config/routs';

export const PictureBanner: React.FC = () => {
  return (
    <ParallaxProvider>
      <Container className="picture">
        <ParallaxBanner
          layers={[{ image: bannerImgPNG, speed: -30 }]}
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
