import { BsPersonSquare, BsTrashFill } from 'react-icons/bs';
// import PropTypes from 'prop-types';
import s from './ContactsList.module.css';
import { connect } from 'react-redux';
import actionDeleteContact from '../../redux/contact-action';

const { deleteContact } = actionDeleteContact;

const ContactsList = ({ filter, contacts, onClickDelete }) => {
  const getVisibleFilterContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filterContacts = getVisibleFilterContacts();

  return (
    <ul className={s.list}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span className={s.span}>
              <BsPersonSquare />
            </span>
            <p className={s.text}>
              {name} : {number}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => {
                onClickDelete(id);
              }}
            >
              <BsTrashFill />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onClickDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

// ContactsList.propTypes = {
//   onClickDelete: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
