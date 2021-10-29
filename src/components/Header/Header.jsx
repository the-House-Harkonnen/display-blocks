/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import LoginBtn from '../LoginBtn';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <Nav />
      <LoginBtn />
    </div>
  );
}

export default Header;
