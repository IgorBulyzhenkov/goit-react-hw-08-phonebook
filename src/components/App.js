import Phonebook from './Phonebook/Phonebook';
import ContactsList from 'components/ContactsList/ContactsList';
import Container from './Container/Container';
import FilterContacts from './FilterContacts/FilterContacts';
import s from './/App.module.css';
import { connect } from 'react-redux';

function App({ contacts }) {
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps)(App);
