import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signup: (state, { payload: { email, password } }) => ({
      email,
      password,
    }),
  },
});
const { actions } = user;
export const { signup } = actions;
export default user.reducer;
