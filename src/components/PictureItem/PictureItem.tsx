import React, { MouseEventHandler } from 'react';
import './PictureItem.scss';
import { NavLink } from 'react-router-dom';
import { addIdPicture } from '../store/slicers/idPicture.slicer';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();
  const handleNavigateToPicturePage = () => {
    // event.preventDefault();
    dispatch(addIdPicture(id));
    console.log(id);
  };
  return (
    <NavLink
      to={`/pictures/${id}`}
      className="picture-item-wrapper"
      onClick={handleNavigateToPicturePage}
    >
      {/*<NavLink to={`/pictures/${id}`}>*/}
      <div className="picture-item-img">
        <img src={img} alt={title} className="picture-img" loading="lazy" />
      </div>
      <p className="picture-item-title">{title}</p>
      <p className="picture-item-genre">{genre}</p>
      <p className="picture-item-size">{size}</p>
      {/*</NavLink>*/}
    </NavLink>
  );
};
