import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:5000/api';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: '',
    user: {},
  },
  reducers: {
    registerUserStart(state) {
      state.loading = true;
    },
    registerUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { registerUserStart, registerUserError } = authSlice.actions;

export default authSlice.reducer;

export const registerNewUser = (email, password) => async (dispatch) => {
  dispatch(registerUserStart());
  try {
    const newUser = await axios.post(`${url}/login`, { email, password });
    if (newUser) {
      console.log(res.data);
    }
  } catch (error) {
    dispatch(registerUserError(error));
  }
};
