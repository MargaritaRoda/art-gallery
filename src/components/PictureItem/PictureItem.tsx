import React from 'react';
import './PictureItem.scss';

type PictureItem = {
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
  return (
    <article className="picture-item-wrapper">
      <div className="picture-item-img">
        <img src={img} alt={title} className="picture-img" />
      </div>
      <p className="picture-item-title">{title}</p>
      <p className="picture-item-genre">{genre}</p>
      <p className="picture-item-size">{size}</p>
    </article>
  );
};
