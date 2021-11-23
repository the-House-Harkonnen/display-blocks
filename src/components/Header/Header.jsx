import React from 'react';
import Logo from '../Logo';
import Nav from '../Nav';
import LoginBtn from '../LoginBtn';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Header.module.scss';

const Header = () => {
  const [{ theme }] = useThemeContext();
  return (
    <div
      className={styles.header}
      style={{ backgroundColor: theme.backgroundColor }}
    >
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
