import { BsPersonSquare, BsTrashFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onClickDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
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

export default ContactsList;

ContactsList.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
