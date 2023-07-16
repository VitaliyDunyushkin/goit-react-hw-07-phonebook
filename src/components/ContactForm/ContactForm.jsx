import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './contactForm.module.css';

export default function ContactForm() {
  const [friend, setFriend] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const prevContacts = useSelector(selectContacts);

  const contact = { name: friend, phone: number };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'friend') {
      setFriend(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setFriend('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    const message = contact.name + ' is already in contacts';

    if (prevContacts.find(prevContact => prevContact.name === contact.name)) {
      alert(message);
    } else {
      dispatch(addContact(contact));
    }

    reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={css.input}
            type="text"
            name="friend"
            value={friend}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я
              ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe,
      dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de
      Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
