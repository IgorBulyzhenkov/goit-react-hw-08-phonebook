// import { v4 as uuidv4 } from 'uuid';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import s from './/App.module.css';
import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';


function App({ contacts }) {
  // const [contacts, setContacts] = useState(() => {
  //   const contactsLocal = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contactsLocal);
  //   if (parsedContacts) {
  //     return parsedContacts;
  //   }
  //   // return dataUse;
  // });
  // const [filter, setFilter] = useState('');

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }

  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const formSaveData = (name, number) => {
  //   const contact = {
  //     name,
  //     number,
  //     id: uuidv4(),
  //   };
  //   setContacts(prev => [...prev, contact]);
  // };

  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  // const getVisibleFilterContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const getFindContacts = userName => {
  //   const userFind = contacts.find(({ name }) => name === userName);
  //   return userFind?.name;
  // };

  // const deleteContacts = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const visible = getVisibleFilterContacts();
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
            <FilterContacts/>
            <ContactsList />
          </>
          // contacts={visible} onClickDelete={deleteContacts}
        )}
      </Container>
    </>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
