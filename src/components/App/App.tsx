import React from 'react';

import { Icon } from '@gravity-ui/uikit';

import fullLogo from 'src/images/logo-full.svg';

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
