// const allContacts = state => state.contacts.iytems;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;
export const getLoading = state => state.contacts.loading;

const sortContacts = state => {
  const contacts = getContacts(state);
  const sorted = [...contacts]?.sort((a, b) => {
    const aDate = Date.parse(a.createdAt);
    const bDate = Date.parse(b.createdAt);
    return bDate - aDate;
  });

  return sorted;
};

export const getVisibleFilterContacts = state => {
  const contacts = sortContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter?.toLowerCase();

  return contacts.filter(contact =>
    contact?.name?.toLowerCase().includes(normalizeFilter)
  );
};
