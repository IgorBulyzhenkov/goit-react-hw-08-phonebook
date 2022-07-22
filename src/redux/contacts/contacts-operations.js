import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import { token } from 'redux/axios';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistorToken = state.user.token;
    if (persistorToken === null) return rejectWithValue();
    token.set(persistorToken);
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = {
      name,
      number,
    };

    try {
      const result = await axios.post('/contacts', contact);
      Notify.success(`${name} is added to the list of contacts`);
      return result.data;
    } catch (error) {
      Notify.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const fetchApi = { fetchContacts, deleteContacts, addContacts };

export default fetchApi;
