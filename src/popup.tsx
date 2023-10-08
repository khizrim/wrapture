import React from 'react';

import { createRoot } from 'react-dom/client';

import { Popup } from 'src/components';

import 'src/common.css';

createRoot(document.getElementById('popup-root') as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
