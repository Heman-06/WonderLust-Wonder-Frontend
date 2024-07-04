// hooks/useAuthCheck.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

const useAuthCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('No token found, navigating to login.');
        navigate('/auth');
        return;
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000; // Convert to seconds

        if (decodedToken.exp < currentTime) {
          console.log('Token expired, removing token and navigating to login.');
          localStorage.removeItem('token');
          navigate('/auth');
        }
      } catch (error) {
        console.error('Failed to decode token:', error);
        localStorage.removeItem('token');
        navigate('/auth');
      }
    };

    checkToken();

    const interval = setInterval(checkToken, 6000); // Check every 60 seconds

    return () => clearInterval(interval);
  }, [navigate]);
};

export default useAuthCheck;
