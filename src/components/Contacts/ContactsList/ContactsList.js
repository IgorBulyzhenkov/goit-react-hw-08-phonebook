import { BsPersonSquare, BsTrashFill } from 'react-icons/bs';
import s from './ContactsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleFilterContacts } from 'redux/contacts/contacts-selector';
import fetchApi from 'redux/contacts/contacts-operations';

const { deleteContacts } = fetchApi;

const ContactsList = () => {
  const dispatch = useDispatch();

  const filterContacts = useSelector(state => getVisibleFilterContacts(state));

  return (
    <ul className={s.list}>
      {filterContacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={s.item}>
            <span className={s.span}>
              <BsPersonSquare />
            </span>
            <p className={s.text}>
              {name} : {phone}
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => {
                dispatch(deleteContacts(id));
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
