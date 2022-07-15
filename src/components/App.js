import { v4 as uuidv4 } from 'uuid';
import Phonebook from './Phonebook/Phonebook';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import s from './/App.module.css';
import { useState, useEffect, useRef } from 'react';

const dataUse = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsLocal = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocal);
    if (parsedContacts) {
      return parsedContacts;
    }
    return dataUse;
  });
  const [filter, setFilter] = useState('');

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSaveData = (name, number) => {
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    setContacts(prev => [...prev, contact]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const getVisibleFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const getFindContacts = userName => {
    const userFind = contacts.find(({ name }) => name === userName);
    return userFind?.name;
  };

  const deleteContacts = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const visible = getVisibleFilterContacts();
  return (
    <>
      <Container title="Phonebook">
        <Phonebook onSaveSubmit={formSaveData} findContact={getFindContacts} />
      </Container>

      <Container title="Contacts">
        {!contacts?.length ? (
          <p className={s.text}>Sorry , there are no contacts here .</p>
        ) : (
          <>
            <FilterContacts onChange={changeFilter} />
            <ContactsList contacts={visible} onClickDelete={deleteContacts} />
          </>
        )}
      </Container>
    </>
  );
}

// class App extends Component {
// state = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);
//   if (parsedContacts) this.setState({ contacts: parsedContacts });
// }

// componentDidUpdate(prevProps, prevState) {
//   if (prevState.contacts !== this.state.contacts) {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }
// }

// formSaveData = (name, number) => {
//   const contact = {
//     name,
//     number,
//     id: uuidv4(),
//   };
//   this.setState(prev => ({
//     contacts: [...prev.contacts, contact],
//   }));
// };

// changeFilter = e => {
//   this.setState(() => ({
//     filter: e.target.value,
//   }));
// };

// getVisibleFilterContacts = () => {
//   const { contacts, filter } = this.state;
//   const normalizeFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// };

// getFindContacts = userName => {
//   const userFind = this.state.contacts.find(({ name }) => name === userName);
//   return userFind?.name;
// };

// deleteContacts = id => {
//   this.setState({
//     contacts: this.state.contacts.filter(contact => contact.id !== id),
//   });
// };

// render() {
//   const { contacts } = this.state;
//   const {
//     changeFilter,
//     getVisibleFilterContacts,
//     getFindContacts,
//     deleteContacts,
//   } = this;
//   const visible = getVisibleFilterContacts();
//   return (
//     <>
//       <Container title="Phonebook">
//         <Phonebook
//           onSaveSubmit={this.formSaveData}
//           findContact={getFindContacts}
//         />
//       </Container>

//       <Container title="Contacts">
//         {!contacts.length ? (
//           <p className={s.text}>Sorry , there are no contacts here .</p>
//         ) : (
//           <>
//             <FilterContacts onChange={changeFilter} />
//             <ContactsList contacts={visible} onClickDelete={deleteContacts} />
//           </>
//         )}
//       </Container>
//     </>
//   );
// }
// }

export default App;
