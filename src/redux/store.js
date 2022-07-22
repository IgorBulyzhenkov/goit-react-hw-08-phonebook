import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import userContacts from './contacts/contact-reduce';
import authSlice from './user/user-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }),
];
const userPersistor = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    contacts: userContacts,
    user: persistReducer(userPersistor, authSlice),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store)


const storeContacts = { store, persistor };

export default storeContacts;
