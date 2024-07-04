import {jwtDecode} from 'jwt-decode';

export const isTokenExpired = () => {
  const token = localStorage.getItem('token');
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Time in seconds
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem('token');
      return true;
    }
    return false;
  } catch (error) {
    console.error('Failed to decode token:', error);
    localStorage.removeItem('token');
    return true;
  }
};
