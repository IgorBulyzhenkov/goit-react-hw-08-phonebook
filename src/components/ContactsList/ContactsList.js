import { BsPersonSquare, BsTrashFill } from 'react-icons/bs';
import s from './ContactsList.module.css';
import actionDeleteContact from '../../redux/contact-action';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleFilterContacts } from 'redux/contacts-selector';

const { deleteContact } = actionDeleteContact;

const ContactsList = () => {
  const dispatch = useDispatch();

  const filterContacts = useSelector(getVisibleFilterContacts);

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
                dispatch(deleteContact(id));
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
