import { RootState } from '../index';

export const selectGenre = (state: RootState) => {
  return state.filteredGenres;
};
