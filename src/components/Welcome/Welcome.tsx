import React from 'react';
import './welcome.scss';
import { Container } from '../Container/Container';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import bannerImgGray from '../../asset/bannerImgGray.png';

export const Welcome: React.FC = () => {
  return (
    <ParallaxProvider>
      <Container className="welcome">
        <h1 className="welcome-title">
          Bring <br />
          classical art <br />
          to the world
        </h1>
        <div className="welcome-img">
          <Parallax
            className="parallax-container"
            y={[-20, 20]}
            tagOuter="figure"
            scale={[1.5, 0.5, 'easeInQuad']}
          >
            <img src={bannerImgGray} alt="Vivaldi" />
          </Parallax>
        </div>
      </Container>
    </ParallaxProvider>
  );
};
