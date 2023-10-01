import React from 'react';

import { ThemeProvider } from '@gravity-ui/uikit';

import logo from '../../images/logo-full.svg';

import styles from './App.module.css';
export const App = () => {
  return (
    <ThemeProvider>
      <div className={styles.options}>
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt={'Wrapture Logo'} />
        </div>
      </div>
    </ThemeProvider>
  );
};
