import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getInLoggedIn } from '../../redux/user/user-selector';

function PublicRoute({ children, redirect = '/contacts' }) {
  const isLoggedIn = useSelector(getInLoggedIn);

  return !isLoggedIn ? children : <Navigate to={redirect} replace />;
}

export default PublicRoute;
