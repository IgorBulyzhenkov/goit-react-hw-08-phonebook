import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../axios';

const registrationNewUser = createAsyncThunk(
  'user/registrationNewUser',

  async ({ name, email, password }, { rejectWithValue }) => {
    const body = {
      name,
      email,
      password,
    };
    try {
      const { data } = await axios.post('/users/signup', body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const logInUser = createAsyncThunk(
  'user/logInUser',
  async ({ email, password }, { rejectWithValue }) => {
    const body = { email, password };

    try {
      const { data } = await axios.post('/users/login', body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
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
      rejectWithValue(error);
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
      rejectWithValue(error);
    }
  }
);

const user = { registrationNewUser, logInUser, logOutUser, fetchCurrentUser };

export default user;
