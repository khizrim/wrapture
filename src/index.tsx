import React from 'react';

import { createRoot } from 'react-dom/client';

import { App } from 'src/components';

import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
