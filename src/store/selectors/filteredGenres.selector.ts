import { RootState } from '../index';

export const selectFilterGenre = (state: RootState) => {
  return state.filteredGenres;
};
