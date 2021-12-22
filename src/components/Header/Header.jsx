/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import LoginBtn from '../LoginBtn';
import styles from './Header.module.scss';
import { useThemeContext } from '../../contexts/themeContext';

const Header = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
      </div>
      <div className={styles.header__nav}>
        <input
          onChange={() => toggleTheme()}
          type='checkbox'
          name='theme'
          id='theme'
          className={styles.checkbox}
        />
        <Nav />
      </div>
      <div className={styles.header__btn}>
        <LoginBtn />
      </div>
    </div>
  );
};

export default Header;
