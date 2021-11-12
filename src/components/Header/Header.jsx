/* eslint-disable no-console */
import React, { useState, useEffect, createRef } from 'react';
import { useCallback } from 'react/cjs/react.development';
import LoginBtn from '../LoginBtn';
import Logo from '../Logo';
import Nav from '../Nav';
import styles from './Header.module.scss';
import { BurgerIcon, UserIcon } from '../Icons/Icons';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const classNav = showNav ? `${styles.nav} ${styles.show}` : styles.nav;
  const navRef = createRef();

  const clickOutside = useCallback((e) => {
    setShowNav((prev) => {
      if (e.target === e.currentTarget) return false;
      return prev;
    });
  }, []);
  useEffect(() => {
    if (showNav) {
      navRef.current.addEventListener('click', clickOutside);
    } else {
      navRef.current.removeEventListener('click', clickOutside);
    }
  }, [showNav]);

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
      <div className={classNav} ref={navRef}>
        <Nav />
        <LoginBtn />
      </div>
    </div>
  );
};

export default Header;
