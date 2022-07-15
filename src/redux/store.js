import { createStore, combineReducers } from 'redux';
import userContacts from './contact-reduce';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createReducer } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  contacts: userContacts,
});

const store = createStore(rootReducer,composeWithDevTools());

export default store;
