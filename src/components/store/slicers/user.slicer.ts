import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  username: '',
  password: '',
};

const user = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    signup: (state, { payload: { username, password } }) => ({
      username,
      password,
    }),
  },
});
const { actions } = user;
export const { signup } = actions;
export default user;
