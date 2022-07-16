import { useSelector } from 'react-redux';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import { getContacts } from 'redux/contacts-selector';
import s from './/App.module.css';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Container title="Phonebook">
        <Phonebook />
      </Container>

      <Container title="Contacts">
        {!contacts?.length ? (
          <p className={s.text}>Sorry , there are no contacts here .</p>
        ) : (
          <>
            <FilterContacts />
            <ContactsList />
          </>
        )}
      </Container>
    </>
  );
}
