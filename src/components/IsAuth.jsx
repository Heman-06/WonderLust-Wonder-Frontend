// components/IsAuth.js
import { Navigate, Outlet } from 'react-router-dom';
import { isTokenExpired } from './IsTokenExpired';
import useAuthCheck from './UseAuthCheck';

const IsAuth = () => {

  useAuthCheck();

  const tokenExpired = isTokenExpired();
  return tokenExpired ? <Navigate to="/auth" /> : <Outlet />;
};

export default IsAuth;
