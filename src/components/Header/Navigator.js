import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import s from './Navigator.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  background-color: beige;
  &.active {
    color: orange;
    background-color: rgb(175, 3, 147);
  }
`;

function Navigator() {
  return (
    <ul className={s.Navigator__list}>
      <li className={s.Navigator__item}>
        <StyledLink to="/login" className={s.logIn}>
          log in
        </StyledLink>
      </li>
      <li className={s.Navigator__item}>
        <StyledLink to="/register" className={s.singUp}>
          sing up
        </StyledLink>
      </li>
    </ul>
  );
}
export default Navigator;
