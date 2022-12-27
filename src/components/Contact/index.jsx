import styles from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from 'react-bootstrap';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <span className="me-2">
        {contact.name}: {contact.number}
      </span>
      <Button
        type="button"
        className={styles.btn}
        variant="outline-primary"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
