import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleFilter } from 'redux/contacts/contactsSlice';
import { Form } from 'react-bootstrap';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleFilter(filter));
  }, [filter, dispatch]);

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <Form className="mb-1">
      <Form.Group>
        <Form.Label>Find contacts by name</Form.Label>
        <Form.Control
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};
