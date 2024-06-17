import { RootState } from '../index';

export const selectorAllPictures = (state: RootState) => {
  return state.allPictures;
};
