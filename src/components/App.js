import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header/Header';
import Contacts from './Contacts/Contacts';
import Register from './Register/Register';
import Login from './Login/Login';
import userFetch from '../redux/user/user-operation';
import PrivetRoute from './Route/PrivateRoute';
import PublicRoute from './Route/PublicRoute';
import { getIsFetchingCurrent } from 'redux/user/user-selector';

const { fetchCurrentUser } = userFetch;

function App() {

  const isFetching = useSelector(getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {!isFetching && (
          <>
            <Route
              index
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
          </>
        )}
      </Route>
      {!isFetching && <Route path="*" element={<p> Not found </p>} />}
    </Routes>
  );
}

export default App;
