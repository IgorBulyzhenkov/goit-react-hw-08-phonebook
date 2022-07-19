import { FiSearch } from 'react-icons/fi';
import s from './FilterContacts.module.css';
import filterContact from '../../redux/contact-action';
import { useDispatch } from 'react-redux';

const FilterContacts = () => {
  const dispatch = useDispatch();

  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          onChange={e => dispatch(filterContact(e.target.value))}
          className={s.input}
        />
        <span className={s.span}>
          <FiSearch color="black" />
        </span>
      </label>
    </>
  );
};

export default FilterContacts;
