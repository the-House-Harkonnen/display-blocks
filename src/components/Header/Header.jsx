import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import LoginBtn from '../LoginBtn';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
      </div>
      <div className={styles.header__nav}>
        <Nav />
      </div>
      <div className={styles.header__btn}>
        <LoginBtn />
      </div>
    </div>
  );
};

export default Header;
