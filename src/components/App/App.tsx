import React from 'react';

import { ThemeProvider } from '@gravity-ui/uikit';

import { Logo } from 'src/components/Logo';

import styles from './App.module.css';

export const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.options}>
        <div className={styles.container}>
          <Logo variant={'full'} />
        </div>
      </div>
    </ThemeProvider>
  );
};
