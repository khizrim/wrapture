import React from 'react';

import { createRoot } from 'react-dom/client';

import { Options } from 'src/components';

import 'src/common.css';

createRoot(document.getElementById('options-root') as HTMLElement).render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
