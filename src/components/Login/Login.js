import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Login.module.css';
import userLogIn from '../../redux/user/user-operation';

const { logInUser } = userLogIn;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const reset = () => {
     setEmail('');
     setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUser({ email, password, reset }));
   
  };

  return (
    <div className={s.autor}>
      <h2 className={s.title}>Authorization</h2>
      <form onSubmit={handleSubmit} className={s.form}>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
