import React from 'react';
import './PictureList.scss';
import { PictureItem } from '../PictureItem/PictureItem';

type PictureList = {
  items: PictureItem[];
  isLoading: boolean;
};
export const PictureList = ({ items, isLoading }: PictureList) => {
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
