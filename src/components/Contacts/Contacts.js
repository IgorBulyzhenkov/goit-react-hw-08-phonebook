import s from './Contacts.module.css';
import { Oval } from 'react-loader-spinner';
import { useSelector, useDispatch } from 'react-redux';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from './ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import fetchApi from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import {
  getContacts,
  getLoading,
} from '../../redux/contacts/contacts-selector';

const { fetchContacts } = fetchApi;

function Contacts() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Container title="Phonebook">
        <Phonebook />
      </Container>

      <Container title="Contacts" className={s.contacts}>
        {isLoading && (
          <div className={s.Loader}>
            <Oval
              color="#1b181b"
              height={70}
              width={70}
              secondaryColor="grey"
            />
          </div>
        )}
        {!contacts?.length && !isLoading ? (
          <p className={s.text}> Sorry , there are no contacts here .</p>
        ) : (
          <>
            {!contacts?.length ? null : <FilterContacts />}
            <ContactsList />
          </>
        )}
      </Container>
    </div>
  );
}

export default Contacts;
