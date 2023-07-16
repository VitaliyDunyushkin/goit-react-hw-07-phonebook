import { useSelector } from 'react-redux/es/hooks/useSelector';

import css from './contactList.module.css';
import ContactItem from '../ContactItem';
import { selectContacts, selectFilterValue } from 'redux/selectors';

export default function ContactList() {
  const filterValue = useSelector(selectFilterValue);

  const contacts = useSelector(selectContacts).filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
}
