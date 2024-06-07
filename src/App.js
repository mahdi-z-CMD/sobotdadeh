import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Login from './Login';
import Aboutus from './Aboutus';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.jsx'; // Ensure the correct path

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="App">
        <Navbar />
        <div className="home">
          <Routes>
            <Route path="sobotdadeh" element={<Home />} />
            <Route path="sobotdadeh/login" element={<Login />} />
            <Route path="sobotdadeh/aboutus" element={<Aboutus />} />
            <Route path="/" element={<Navigate to="sobotdadeh" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </I18nextProvider>
  );
}

export default App;
