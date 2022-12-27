import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Stack } from 'react-bootstrap';
import { fetchContacts } from 'redux/contacts/operations';

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center my-1">Contacts</h1>
      <Stack
        className="justify-content-center align-items-start mt-4"
        direction="horizontal"
        gap={5}
      >
        <div>
          <ContactForm />
        </div>
        <div>
          <Filter />
          {isLoading && !error ? <Loader /> : <ContactList />}
        </div>
      </Stack>
    </>
  );
};

export default ContactsPage;
