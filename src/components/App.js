import { useDispatch, useSelector } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import { getContacts, getError, getLoading } from 'redux/contacts-selector';
import s from './/App.module.css';
import fetchApi from 'redux/contacts-operations';
import { useEffect } from 'react';

const { fetchContacts } = fetchApi;

function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const err = useSelector(getError);

  console.log(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container title="Phonebook">
        <Phonebook />
      </Container>

      <Container title="Contacts" className={s.contacts}>
        {isLoading && (
          <div className={s.Loader}>
            <Rings color="#FFFFFF" height={80} width={80} />
          </div>
        )}
        {err && <p className={s.text}>ERROR {err.message}</p>}
        {!contacts?.length && !isLoading ? (
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
