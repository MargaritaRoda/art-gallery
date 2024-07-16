import { RootState } from '../index';
import { createSelector } from '@reduxjs/toolkit';

export const selectGenre = (state: RootState) => {
  return state.genres;
};
export const selectGenresForRender = createSelector(
  [selectGenre],
  (defaultCheckboxFields) => {
    return defaultCheckboxFields.map((field) => {
      return {
        id: field.split(' ').join('').toLowerCase(),
        label: field,
      };
    });
  },
);
