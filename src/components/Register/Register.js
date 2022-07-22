import { useDispatch } from 'react-redux';
import { useState } from 'react';
import s from './Register.module.css';
import user from '../../redux/user/user-operation';

const { registrationNewUser } = user;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationNewUser({ name, email, password, reset }));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  return (
    <div className={s.registr}>
      <h2 className={s.title}>Regisration</h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            type="name"
            name="name"
            value={name}
            required
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Email
          <input
            type="mail"
            name="email"
            value={email}
            required
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.btn}>
          Registration
        </button>
      </form>
    </div>
  );
}

export default Register;
