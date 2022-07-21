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
  [fetchContacts.rejected]: (_, action) => action.error.message,
  [deleteContacts.pending]: () => false,
  [deleteContacts.rejected]: (_, action) => action.error.message,
  [addContacts.pending]: () => false,
  [addContacts.rejected]: (_, action) => action.error.message,
});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
