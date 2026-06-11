import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Analytics } from '@vercel/analytics/next';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>
);