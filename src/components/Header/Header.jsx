import React, { useState } from 'react';
import LoginBtn from '../LoginBtn';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './Header.module.scss';
import { BurgerIcon, UserIcon } from '../Icons/Icons';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const classNav = showNav ? `${styles.nav} ${styles.show}` : styles.nav;

  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.burger}>
        <button type='button'>
          <UserIcon />
        </button>
        <button type='button' onClick={() => setShowNav(!showNav)}>
          <BurgerIcon />
        </button>
      </div>
      <div className={classNav}>
        <Nav />
        <LoginBtn />
      </div>
    </div>
  );
};

export default Header;
