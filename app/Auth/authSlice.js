import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const url = 'http://localhost:5000/api/auth';

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
    registerUserSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
    },
    registerUserError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  registerUserStart,
  registerUserSuccess,
  registerUserError,
} = authSlice.actions;

export default authSlice.reducer;

export const registerNewUser = (user) => async (dispatch) => {
  dispatch(registerUserStart());
  try {
    const newUser = await axios.post(`${url}/register`, user);
    console.log('newuser', newUser);
    if (newUser) {
      dispatch(
        registerUserSuccess({
          id: newUser.data.id,
          email: newUser.data.email,
          name: newUser.data.name,
        })
      );
      await SecureStore.setItemAsync('authToken', newUser.data.token);
    }
  } catch (error) {
    dispatch(registerUserError(error));
  }
};
