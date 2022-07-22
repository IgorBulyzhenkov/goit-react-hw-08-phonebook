import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getInLoggedIn } from '../../redux/user/user-selector';

function PublicRoute({ children, redirect = '/contacts' }) {
  const isLoggedIn = useSelector(getInLoggedIn);
  return isLoggedIn ? <Navigate to={redirect} replace /> : children;
}

export default PublicRoute;
