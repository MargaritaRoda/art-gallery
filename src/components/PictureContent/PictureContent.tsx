import React, { useState } from 'react';
import './PictureContent.scss';
import { ImgFullScreen } from '../ImgFullScreen/ImgFullScreen';
import { ScrollRestoration } from 'react-router-dom';

type PictureContent = {
  id: number;
  img: string;
  imgInterior: string;
  imgRow: string; //без рамы белый фон
  title: string;
  genre: string;
  size: string;
  description?: string;
};

export const PictureContent: React.FC<PictureContent> = ({
  id,
  img,
  imgInterior,
  imgRow,
  title,
  genre,
  size,
  description,
}) => {
  const items = [img, imgInterior, imgRow]; //все слайды
  const [slide, setSlide] = useState(0); // индех слайда который показывают
  const [animation, setAnimation] = useState(true);

  const [image, setImage] = useState(img);
  console.log('image', image);
  const [isFullScreenImgOpen, setIsFullScreenImgOpen] = useState(false);

  // функция смены слайда
  const changeSlide = (direction = 1) => {
    setAnimation(false);
    let slideNumber;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    const value = items.find((_, index) => index === slideNumber);
    if (value) {
      setImage(value);
    }
    setSlide(slideNumber);

    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  };

  const handleCloseFullScreenImg = () => {
    setIsFullScreenImgOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <article className="picture-content">
      <div className="slider">
        <div
          className="arrow left"
          onClick={() => changeSlide(-1)}
          style={{ color: 'white' }}
        ></div>
        <div className="slide-list">
          <div className={`slide ${animation && 'fadeInAnimation'}`}>
            <img
              src={slide === 0 ? img : image}
              alt={title}
              className="slide-image"
              onClick={() => {
                setIsFullScreenImgOpen(true);
                document.body.style.overflow = 'hidden';
              }}
            />
          </div>
        </div>
        <div className="arrow right" onClick={() => changeSlide(1)}>
          {' '}
        </div>
      </div>
      <div className="picture-text-block">
        <h2 className="picture-text-block-title">{title}</h2>
        <p className="picture-text-block-genre">{genre}</p>
        <p className="picture-text-block-size">{size}</p>
        <p className="picture-text-block-description">{description}</p>
      </div>
      <ImgFullScreen
        img={slide === 0 ? img : image}
        isOpen={isFullScreenImgOpen}
        title={title}
        onHide={handleCloseFullScreenImg}
      />
    </article>
  );
};
