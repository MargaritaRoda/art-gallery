import React, { MouseEventHandler } from 'react';
import './PictureItem.scss';

export type PictureItem = {
  id: number;
  img: string;
  title: string;
  genre: string;
  size: string;
};

export const PictureItem: React.FC<PictureItem> = ({
  id,
  img,
  title,
  genre,
  size,
}) => {
  const handleNavigateToPicturePage = () => {
    // event.preventDefault();
    console.log(id);
  };
  return (
    // <a href={}>
    <article
      className="picture-item-wrapper"
      onClick={handleNavigateToPicturePage}
    >
      <div className="picture-item-img">
        <img src={img} alt={title} className="picture-img" loading="lazy" />
      </div>
      <p className="picture-item-title">{title}</p>
      <p className="picture-item-genre">{genre}</p>
      <p className="picture-item-size">{size}</p>
    </article>
    // </a>
  );
};
