import React, { useEffect, useState } from 'react';
import './PictureList.scss';
import { PictureItem } from '../PictureItem/PictureItem';
import { useSelector } from 'react-redux';
import { selectFilterGenre } from '../../store/selectors/filteredGenres.selector';
import { selectorAllPictures } from '../../store/selectors/allPictures.selector';
import { Genres } from '../../store/slicers/genres.slicer';
import { selectGenre } from '../store/selectors/genre.selector';
import { Gallery } from '../../services/db';

type PictureList = {
  items?: PictureItem[];
  isLoading: boolean;
};
export const PictureList = ({ isLoading }: PictureList) => {
  const [pictures, setPictures] = useState([] as Gallery[]);
  const genres: Genres = useSelector(selectGenre);
  const selectedFilteredGenres = useSelector(selectFilterGenre);
  const allPicturesSelected = useSelector(selectorAllPictures);
  useEffect(() => {
    setPictures(allPicturesSelected), [allPicturesSelected];
  });
  let items;
  if (genres.length !== selectedFilteredGenres.length) {
    items = pictures.filter((item) => {
      return selectedFilteredGenres.includes(
        item.genre.split(' ').join('').toLowerCase(),
      );
    });
  } else {
    items = pictures;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <section className="items-wrapper">
      {items.map((item) => (
        <PictureItem
          key={item.id}
          img={item.img}
          title={item.title}
          genre={item.genre}
          size={item.size}
          id={item.id}
        />
      ))}
    </section>
  );
};
