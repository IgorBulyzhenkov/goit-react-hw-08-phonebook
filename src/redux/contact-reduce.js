import dataUser from './dataUser.json';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contact-action';


const items = createReducer(dataUser, {
  [action.addContact]: (state, { payload }) => [payload, ...state],
  [action.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [action.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
