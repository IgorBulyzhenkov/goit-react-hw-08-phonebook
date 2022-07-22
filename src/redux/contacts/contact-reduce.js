import { combineReducers } from 'redux';
import {  createReducer } from '@reduxjs/toolkit';
import action from './contact-action';
import fetchContactsAll from './contacts-operations';

const { filterContact, reset } = action;
const { fetchContacts, deleteContacts, addContacts } = fetchContactsAll;

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => null,
  [deleteContacts.pending]: () => true,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.rejected]: () => null,
  [addContacts.pending]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.rejected]: () => null,
});

const error = createReducer(null, {
  [fetchContacts.pending]: () => false,
  [fetchContacts.rejected]: (_, action) => action.payload,
  [deleteContacts.pending]: () => false,
  [deleteContacts.rejected]: (_, action) => action.payload,
  [addContacts.pending]: () => false,
  [addContacts.rejected]: (_, action) => action.payload,
  [reset]: () => false,
});



export default combineReducers({
  items,
  filter,
  loading,
  error,
});
