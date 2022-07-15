
import { FiSearch } from 'react-icons/fi';
import s from './FilterContacts.module.css';
import { connect } from 'react-redux';
import actionFilter from '../../redux/contact-action';

const { filterContact } = actionFilter;

const FilterContacts = ({ visible, onChange }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          value={visible}
          onChange={onChange}
          className={s.input}
        />
        <span className={s.span}>
          <FiSearch color="black" />
        </span>
      </label>
    </>
  );
};

const mapStateToProps = state => ({
  visible: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContacts);

