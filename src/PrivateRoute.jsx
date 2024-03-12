// PrivateRoute.js

import { getCookie } from './AuthContext'; // Import your cookie handling functions

const isAuthenticated = () => {
  const user = getCookie('user'); // Get the value of the 'user' cookie
  return user === true; // Return true if the user cookie is 'true', otherwise false
};

export default isAuthenticated;
