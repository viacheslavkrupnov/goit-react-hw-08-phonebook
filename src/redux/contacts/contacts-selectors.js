import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFiteredContacts = contacts => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(items =>
        items.name.toLowerCase().includes(normalizedFilter),
      );
    };

    return getFiteredContacts(contacts);
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;
