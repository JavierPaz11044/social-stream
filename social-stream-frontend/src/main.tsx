import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const documentRoot = document.getElementById('root');
if (documentRoot !== null && documentRoot !== undefined) {
  ReactDOM.createRoot(documentRoot).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
