/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
import React from 'react';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import LoginBtn from '../LoginBtn';
import Logo from '../Logo';
import Person from '../svg/Person';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.person}>
        <Person />
      </div>
      <BurgerBtn />
      <LoginBtn />
    </div>
  );
}

export default Header;
