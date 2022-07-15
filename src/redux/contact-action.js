import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    name,
    number,
    id: uuidv4(),
  },
});

const deleteContact = id => ({
  type: types.DELETE,
  payload: id,
});

const filterContact = value => ({
  type: types.FILTER,
  payload: value,
});

const actionContact = { addContact, deleteContact, filterContact };

export default actionContact;
