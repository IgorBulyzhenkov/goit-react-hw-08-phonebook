import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import s from './Navigator.module.css';

const StyledLink = styled(NavLink)`
  color: black;
  background-color: beige;
  box-shadow: 0px 0px 18px 5px rgb(214 221 216 / 79%);
  &.active {
    color: rgb(71, 59, 44);
    background-color: rgba(207, 185, 155, 0.877);
    box-shadow: 0px 0px 18px 5px rgb(214 221 216 / 79%);
  }
`;

function Navigator() {
  return (
    <ul className={s.Navigator__list}>
      <li className={s.Navigator__item}>
        <StyledLink to="login" className={s.logIn}>
          log in
        </StyledLink>
      </li>
      <li className={s.Navigator__item}>
        <StyledLink to="register" className={s.singUp}>
          sing up
        </StyledLink>
      </li>
    </ul>
  );
}
export default Navigator;
