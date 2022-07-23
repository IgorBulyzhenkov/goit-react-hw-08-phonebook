import { lazy, Suspense, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Routes, Route } from 'react-router-dom';
import s from './App.module.css';
import { Oval } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import userFetch from '../redux/user/user-operation';
import PrivetRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import { getIsFetchingCurrent, getName } from 'redux/user/user-selector';
// import Header from './Header/Header';
// import Contacts from './Contacts/Contacts';
// import Register from './Register/Register';
// import Login from './Login/Login';

const Header = lazy(() => {
  import('./Header/Header' /* webpackChunkName: "Header" */);
});
const Contacts = lazy(() => {
  import('./Contacts/Contacts' /* webpackChunkName: "Contacts" */);
});
const Register = lazy(() => {
  import('./Register/Register' /* webpackChunkName: "Register" */);
});
const Login = lazy(() => {
  import('./Login/Login' /* webpackChunkName: "Login" */);
});

const { fetchCurrentUser } = userFetch;

function App() {
  const isFetching = useSelector(getIsFetchingCurrent);
  const userName = useSelector(getName);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetching ? (
    <div className={s.Loader}>
      <Oval color="#1b181b" height={70} width={70} secondaryColor="grey" />
    </div>
  ) : (
    <>
      <Header />
      <Suspense>
        <Routes>
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivetRoute>
                <Contacts />
              </PrivetRoute>
            }
          />
          {!isFetching && (
            <Route path="*" element={userName ? <Contacts /> : <Register />} />
          )}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
