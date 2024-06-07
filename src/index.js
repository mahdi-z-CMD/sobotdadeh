import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Home.jsx';
import { HashRouter  } from 'react-router-dom';
import i18n from './i18n.jsx'; // Ensure the correct path
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
</React.StrictMode>,
);
