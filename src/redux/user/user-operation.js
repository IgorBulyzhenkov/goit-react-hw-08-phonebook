import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const registrationNewUser = createAsyncThunk(
  'user/registrationNewUser',

  async ({ name, email, password }, { rejectWithValue }) => {
    const body = {
      name,
      email,
      password,
    };
    try {
      const result = await axios.post('/users/signup', body);
      console.log(result);
      return result.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const user = { registrationNewUser };

export default user;
