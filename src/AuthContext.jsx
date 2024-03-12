// auth.js

import Cookies from 'universal-cookie';

const cookies = new Cookies();

// Function to set a cookie
export const setCookie = (name, value, options) => {
  cookies.set(name, value, options);
};

// Function to get a cookie
export const getCookie = (name) => {
  return cookies.get(name);
};

// Function to remove a cookie
export const removeCookie = (name) => {
  cookies.remove(name);
};

// Function to check if the user is authenticated
export const isAuthenticated = () => {
  const userLoggedIn = getCookie('user');
  return userLoggedIn === 'true';
};
