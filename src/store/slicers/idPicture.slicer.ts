import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE: number = 0;

const idPicture = createSlice({
  name: 'idPicture',
  initialState: INITIAL_STATE,
  reducers: {
    addIdPicture: (_, { payload: idPicture }) => idPicture,
  },
});
const { actions } = idPicture;
export const { addIdPicture } = actions;
export default idPicture.reducer;
