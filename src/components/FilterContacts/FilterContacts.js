import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import s from './FilterContacts.module.css';

const FilterContacts = ({ onChange }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input type="text" onChange={onChange} className={s.input} />
        <span className={ s.span}>
          <FiSearch color='black'/>
        </span>
      </label>
    </>
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  onChange: PropTypes.func.isRequired
}
