import React from 'react';

import full from 'src/images/logo-full.svg';
import icon from 'src/images/logo.svg';

import styles from './Logo.module.css';

type LogoProps = {
  variant: 'full' | 'icon';
  className?: string;
};

export const Logo = ({ variant, className }: LogoProps) => {
  const src = variant === 'full' ? full : icon;

  return (
    <img
      src={src}
      alt={'Wrapture Logo'}
      className={`${styles.logo} ${className && className}`}
    />
  );
};
