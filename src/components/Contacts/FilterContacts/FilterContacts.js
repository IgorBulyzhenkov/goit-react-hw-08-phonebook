import { FiSearch } from 'react-icons/fi';
import s from './FilterContacts.module.css';
import action from 'redux/contacts/contact-action';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrent } from 'redux/user/user-selector';

const { filterContact } = action;

const FilterContacts = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetchingCurrent);
console.log(isFetching);


  return (
    <>
      {!isFetching && (
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
      )}
    </>
  );
};

export default FilterContacts;
