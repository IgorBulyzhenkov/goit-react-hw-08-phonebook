import { useState } from 'react';
import { useDispatch } from 'react-redux';
import user from '../../redux/user/user-operation';

const { registrationNewUser } = user;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registrationNewUser({ name, email, password }));
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
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="name"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="mail"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Registration</button>
    </form>
  );
}

export default Register;
