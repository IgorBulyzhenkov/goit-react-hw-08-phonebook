import { createSlice } from '@reduxjs/toolkit';
import userThunk from './user-operation';

const { registrationNewUser, logInUser, logOutUser, fetchCurrentUser } =
  userThunk;

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registrationNewUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logInUser.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [registrationNewUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [logInUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [logOutUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.error = payload;
      state.isRefreshing = false;
    },
    [registrationNewUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [logInUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [logOutUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
    [fetchCurrentUser.pending](state) {
      state.error = null;
      state.isRefreshing = true;
    },
  },
});

export default authSlice.reducer;
