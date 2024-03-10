// ProtectedProfilePage.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Profile from './Profile';

const ProtectedProfilePage = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Profile /> : <Navigate to="/login" />;
};

export default ProtectedProfilePage;
