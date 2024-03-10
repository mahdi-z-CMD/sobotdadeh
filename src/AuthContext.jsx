// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['isLoggedIn']);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by reading from the cookie
    const userLoggedIn = cookies.isLoggedIn === 'true';
    setIsLoggedIn(userLoggedIn);
  }, [cookies]);

  const login = () => {
    // Perform login actions (e.g., send request to server for authentication)
    // If login is successful, set isLoggedIn to true and store it in the cookie
    setIsLoggedIn(true);
    setCookie('isLoggedIn', 'true', { path: '/' });
  };

  const logout = () => {
    // Perform logout actions (e.g., clear authentication-related data)
    // Set isLoggedIn to false and remove the cookie
    setIsLoggedIn(false);
    removeCookie('isLoggedIn', { path: '/' });
  };

  const authValues = {
    isLoggedIn,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>;
};
