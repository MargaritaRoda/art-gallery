import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Genres = string[];

const INITIAL_STATE: Genres = [];

const genres = createSlice({
  name: 'genres',
  initialState: INITIAL_STATE,
  reducers: {
    setGenres: (_, action: PayloadAction<Genres>) => {
      return action.payload;
    },
    // updateGenres: (state, action: PayloadAction<Genres>) => {
    //   return state.filter((genre) => action.payload.includes(genre));
    // },
  },
});
const { actions } = genres;
export const { setGenres } = actions;
export default genres.reducer;
