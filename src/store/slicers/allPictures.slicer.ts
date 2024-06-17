import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gallery } from '../../services/db';

const INITIAL_STATE: Gallery[] = [];

const allPictures = createSlice({
  name: 'allPictures',
  initialState: INITIAL_STATE,
  reducers: {
    setAllPictures: (state, action: PayloadAction<Gallery[]>) => {
      return [...action.payload];
    },
  },
});
const { actions } = allPictures;
export const { setAllPictures } = actions;
export default allPictures;
