import styles from './HomePage.module.css';
import { Container } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Container className={styles.container}>
      <h1 className="text-center">
        Welcome to Phonebook Application &#128214;
      </h1>
    </Container>
  );
};
