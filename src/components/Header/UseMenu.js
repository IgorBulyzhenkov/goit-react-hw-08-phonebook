import { useDispatch, useSelector } from 'react-redux';
import s from './UserMenu.module.css';
import { getName } from '../../redux/user/user-selector';
import userLogOut from '../../redux/user/user-operation';
import { useNavigate } from 'react-router-dom';
const { logOutUser } = userLogOut;

function UserMenu() {
  const userName = useSelector(getName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOutUser());
    navigate('/register');
  };

  return (
    <div className={s.userMenu}>
      <h2 className={s.text}> Добро пожаловать , {userName}</h2>
      <button type="button" className={s.button} onClick={handleClick}>
        log out
      </button>
    </div>
  );
}

export default UserMenu;
