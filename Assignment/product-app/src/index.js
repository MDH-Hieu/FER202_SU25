import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Optional: import Bootstrap CSS (since your components use Bootstrap classes)
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
