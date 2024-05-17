import { createContext, useCallback, useEffect, useState } from 'react';
import axios from '../utils/axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setSession(JSON.parse(session));
    }
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    try {
      const response = await axios.post('/auth/sign-up', {
        name,
        email,
        password,
      });

      localStorage.setItem('session', JSON.stringify(response.data));
      setSession(response.data);
    } catch (error) {
      if (error?.response?.data?.error === 'EMAIL_ALREADY_REGISTERED') throw new Error('Email already registered');

      throw new Error('An error occurred. Please try again.');
    }
  }, []);

  const logIn = useCallback(async ({ email, password }) => {
    try {
      const response = await axios.post('/auth/log-in', {
        email,
        password,
      });

      localStorage.setItem('session', JSON.stringify(response.data));
      setSession(response.data);
    } catch (error) {
      console.log(error.response.data.error);

      if (error?.response?.data?.error === 'EMAIL_INVALID') throw new Error('Invalid email');
      if (error?.response?.data?.error === 'PASSWORD_INVALID') throw new Error('Invalid password');

      throw new Error('An error occurred. Please try again.');
    }
  }, []);

  const logOut = useCallback(async () => {
    localStorage.removeItem('session');
    setSession(null);
  }, []);

  const auth = {
    session,
    signUp,
    logIn,
    logOut,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
