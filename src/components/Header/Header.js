import s from './Header.module.css';
import Navigator from './Navigator';
import UserMenu from './UseMenu';
import { getInLoggedIn } from '../../redux/user/user-selector';
import { useSelector } from 'react-redux';

function Header() {
  const isLogin = useSelector(getInLoggedIn);

  return (
    <>
      <header className={s.header}>
        <div className={s.header__container}>
          {!isLogin ? (
            <nav className={s.nav}>
              <Navigator />
            </nav>
          ) : (
            <UserMenu />
          )}
          <h1 className={s.title}>PhoneBook</h1>
        </div>
      </header>
    </>
  );
}

export default Header;
