// import dataUser from './dataUser.json';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import filterContact from './contact-action';
import fetchContactsAll from './contacts-operations';

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
  [fetchContacts.rejected]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.pending]: () => false,
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.pending]: () => false,
  [deleteContacts.rejected]: () => true,
  [addContacts.fulfilled]: () => false,
  [addContacts.pending]: () => false,
  [addContacts.rejected]: () => true,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
