import { Outlet } from 'react-router-dom';
import s from './Header.module.css';
import Navigator from './Navigator';
import UserMenu from './UseMenu';
import {getInLoggedIn} from '../../redux/user/user-selector';
import { useSelector } from 'react-redux';

function Header() {
  const isLogin = useSelector(getInLoggedIn);

  return (
    <>
      <header className={s.header}>
        {!isLogin ? (
          <nav className={s.nav}>
            <Navigator />
          </nav>
        ) : (
          <UserMenu />
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Header;
