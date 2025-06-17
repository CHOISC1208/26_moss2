import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// src/main.tsx
import './index.css'; // ✅ 絶対に必要


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
