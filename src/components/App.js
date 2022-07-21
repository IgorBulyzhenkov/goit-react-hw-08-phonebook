import { useSelector, useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import Phonebook from './Contacts/Phonebook/Phonebook';
import ContactsList from 'components/Contacts/ContactsList/ContactsList';
import Container from './Contacts/Container/Container';
import FilterContacts from './Contacts/FilterContacts/FilterContacts';
import {
  getContacts,
  getError,
  getLoading,
} from 'redux/contacts/contacts-selector';
import s from './/App.module.css';
import fetchApi from 'redux/contacts/contacts-operations';
import { useEffect } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import Header from './Header/Header';
import userFetch from '../redux/user/user-operation';

const { fetchCurrentUser } = userFetch;
const { fetchContacts } = fetchApi;
function App() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const err = useSelector(getError);

  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  // useEffect(() => {
    
  // }, [ dispatch ]);
  

  useEffect(() => {
    dispatch(fetchCurrentUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        {/* <Route path='contact' element={}/> */}

        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>

      <div className={s.container}>
        <Container title="Phonebook">
          <Phonebook />
        </Container>

        <Container title="Contacts" className={s.contacts}>
          {isLoading && (
            <div className={s.Loader}>
              <Rings color="#1b181b" height={80} width={80} />
            </div>
          )}
          {err && <p className={s.text}>ERROR {err}</p>}
          {!contacts?.length && !isLoading ? (
            <p className={s.text}> Sorry , there are no contacts here .</p>
          ) : (
            <>
              <FilterContacts />
              <ContactsList />
            </>
          )}
        </Container>
      </div>
    </>
  );
}

export default App;
