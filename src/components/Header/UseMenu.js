import s from './UserMenu.module.css';

function UserMenu() {
  return (
    <div className={s.userMenu}>
      <h2 className={s.text}> Добро пожаловать</h2>
      <button type="button" className={s.button}>
        log out
      </button>
    </div>
  );
}

export default UserMenu;
