import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import css from './contactList.module.css';
import ContactItem from '../ContactItem';
import { getContacts } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';

export default function ContactList() {
  const filterValue = useSelector(getFilterValue);

  const contacts = useSelector(getContacts).filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
}
