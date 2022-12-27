import styles from './ContactForm.module.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectItems } from 'redux/contacts/selectors';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const nameArray = items.map(item => item.name);
    if (nameArray.includes(name)) {
      return alert(`${name} is already in contacts.`);
    }
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <Form className="border rounded p-4" onSubmit={handleSubmit}>
      <p className={styles.paragraph}>Enter Contact</p>
      <Form.Group className="mb-3" controlId="inputName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputNumber">
        <Form.Label>Number</Form.Label>
        <Form.Control
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Form.Group>
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};
