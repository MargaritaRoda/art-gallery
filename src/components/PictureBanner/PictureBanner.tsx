import React from 'react';
import './PictureBanner.scss';
import { Container } from '../Container/Container';
import {
  Parallax,
  ParallaxBanner,
  ParallaxProvider,
} from 'react-scroll-parallax';
import gernikaJPG from '../../asset/gernika.jpg';

export const PictureBanner: React.FC = () => {
  return (
    <ParallaxProvider>
      <Container>
        <ParallaxBanner
          layers={[{ image: gernikaJPG, speed: -20 }]}
          // className="aspect-[2/1] height 120hv"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl text-white font-thin">
              We bring you the best
            </h1>
          </div>
          <div>
            <button>Gallery</button>
          </div>
        </ParallaxBanner>
      </Container>
    </ParallaxProvider>
  );
};
