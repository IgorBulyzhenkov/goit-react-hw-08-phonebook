import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { token } from '../axios';

const registrationNewUser = createAsyncThunk(
  'user/registrationNewUser',

  async ({ name, email, password, reset }, { rejectWithValue }) => {
    const body = {
      name,
      email,
      password,
    };
    try {
      const { data } = await axios.post('/users/signup', body);
      token.set(data.token);

      reset();
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const logInUser = createAsyncThunk(
  'user/logInUser',
  async ({ email, password, reset }, { rejectWithValue }) => {
    const body = { email, password };

    try {
      const { data } = await axios.post('/users/login', body);
      token.set(data.token);
      reset();
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const logOutUser = createAsyncThunk(
  'user/logOutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',

  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const persistorToken = state.user.token;
    if (persistorToken === null) return rejectWithValue();
    token.set(persistorToken);
    try {
      const { data } = await axios.get('users/current');
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const user = { registrationNewUser, logInUser, logOutUser, fetchCurrentUser };

export default user;
