import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userContacts from './contact-reduce';


const middleware = [
  ...getDefaultMiddleware(),
  logger,
];

const contactsPersistor = {
  key: 'contacts',
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistor, userContacts) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const storeContacts = { store, persistor };

export default storeContacts;
