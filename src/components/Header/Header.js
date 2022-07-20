import { Outlet } from 'react-router-dom';
import s from './Header.module.css';
import Navigator from './Navigator';
import UserMenu from './UseMenu';

function Header() {
  return (
    <>
      <header className={s.header}>
        {true ? (
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
