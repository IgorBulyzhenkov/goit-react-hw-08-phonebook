import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';


const addContact = createAction('contacts/Add', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
});

const deleteContact = createAction('contacts/Delete');
const filterContact = createAction('contacts/Filter');

const actionContact = { addContact, deleteContact, filterContact };

export default actionContact;
