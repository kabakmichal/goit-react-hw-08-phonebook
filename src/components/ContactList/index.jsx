import styles from './ContactList.module.css';
import { Contact } from 'components/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleItems } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleItems = useSelector(selectVisibleItems);

  return (
    <ul className="list-unstyled py-4">
      {visibleItems.map(contact => (
        <li key={contact.id} className={styles.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
