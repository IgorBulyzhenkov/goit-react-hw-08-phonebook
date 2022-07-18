import { useDispatch, useSelector } from 'react-redux';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import { getContacts, getError} from 'redux/contacts-selector';
import s from './/App.module.css';
import fetchApi from 'redux/contacts-operations';
import { useEffect } from 'react';

const { fetchContacts } = fetchApi;

function App() {
  const contacts = useSelector(getContacts);
  // const isLoading = useSelector(getLoading);
  const err = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container title="Phonebook">
        <Phonebook />
      </Container>

      <Container title="Contacts">
        {err && <p>ERROR</p>}
        {!contacts?.length ? (
          <p className={s.text}> Sorry , there are no contacts here .</p>
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

export default App;
