import { createAction } from '@reduxjs/toolkit';

const filterContact = createAction('contacts/Filter');
const reset = createAction('contactErrorReset');


const action = { filterContact, reset };

export default action;
