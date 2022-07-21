import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://62d56fa915ad24cbf2c7136d.mockapi.io';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',

  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const deleteContacts = createAsyncThunk('contacts/deleteContacts', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});

const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    const result = await axios.post('/contacts', contact);
    return result.data;
  }
);


const fetchApi = { fetchContacts, deleteContacts, addContacts };

export default fetchApi;
