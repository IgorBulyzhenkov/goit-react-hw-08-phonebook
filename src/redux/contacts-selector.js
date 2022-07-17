export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleFilterContacts = state => {
  const contacts = state.contacts.items;
  const filter = state.contacts.filter;
  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
};
