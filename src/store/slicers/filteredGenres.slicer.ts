import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Genres = string[];

const INITIAL_STATE: Genres = [];

const filteredGenres = createSlice({
  name: 'filteredGenres',
  initialState: INITIAL_STATE,
  reducers: {
    setFilteredGenres: (_, action: PayloadAction<Genres>) => {
      return action.payload;
    },
  },
});
const { actions } = filteredGenres;
export const { setFilteredGenres } = actions;
export default filteredGenres.reducer;
