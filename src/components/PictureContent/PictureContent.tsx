import React, { useState } from 'react';
import './PictureContent.scss';

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

export const PictureContent: React.FC<PictureContent> = (item) => {
  const items = [item.img, item.imgInterior, item.imgRow]; //все слайды
  const [slide, setSlide] = useState(0); // индех слайда который показывают
  const [animation, setAnimation] = useState(true);
  const [image, setImage] = useState(items[slide]);

  // функция смены слайда
  const changeSlide = (direction = 1) => {
    setAnimation(false);
    let slideNumber;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    const value = items.find((i, index) => index === slideNumber);
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

  return (
    <article className="picture-content">
      <div className="slider">
        <div
          className="arrow left"
          onClick={() => changeSlide(-1)}
          style={{ color: 'white' }}
        ></div>
        <div
          className="slide-list"
          // style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          <div className={`slide ${animation && 'fadeInAnimation'}`}>
            <img src={image} alt={item.title} className="slide-image" />
          </div>

          {/*{items.map((slide, index) => (*/}
          {/*  <div className={`slide ${animation && 'fadeInAnimation'}`}>*/}
          {/*    <img*/}
          {/*      src={slide}*/}
          {/*      alt={item.title}*/}
          {/*      key={index}*/}
          {/*      className="slide-image"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
        <div
          className="arrow right"
          onClick={() => changeSlide(1)}
          style={{ color: 'white' }}
        >
          {' '}
        </div>
      </div>
      <div className="picture-text-block">
        <h2 className="picture-text-block-title">{item.title}</h2>
        <p className="picture-text-block-genre">{item.genre}</p>
        <p className="picture-text-block-size">{item.size}</p>
        <p className="picture-text-block-description">{item.description}</p>
      </div>
    </article>
  );
};
