import React, { useState, useEffect, createRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react/cjs/react.development';
import { UserIcon, BurgerIcon } from '../Icons/Icons';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Nav.module.scss';

const Nav = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();
  const [showNav, setShowNav] = useState(false);
  const classNav = showNav
    ? `${styles.navigation} ${styles.show}`
    : styles.navigation;
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
    <>
      <div className={styles.burger}>
        <button
          className={styles.burger__btn}
          type='button'
          onClick={() => history.push('/home/login')}
        >
          <UserIcon />
        </button>
        <button
          className={styles.burger__btn}
          type='button'
          onClick={() => setShowNav(!showNav)}
        >
          <BurgerIcon />
        </button>
      </div>
      <div className={classNav} ref={navRef}>
        <nav
          className={styles.nav}
          style={{
            color: theme.color,
          }}
        >
          <NavLink />
          <span
            className={styles.line}
            style={{
              backgroundColor: theme.burgerMenuLine,
            }}
          />
          <div
            className={styles.settings}
            style={{
              backgroundColor: theme.burgerBackground,
            }}
          >
            <p className={styles.settings__item}>Settings</p>
            <p className={styles.settings__item}>Blog</p>
            <p className={styles.settings__item}>Privacy</p>
            <p className={styles.settings__item}>Help</p>
          </div>
          <span
            className={styles.line}
            style={{
              backgroundColor: theme.burgerMenuLine,
            }}
          />
          <div
            className={styles.copyrights}
            style={{
              backgroundColor: theme.burgerBackground,
            }}
          >
            <p className={styles.copyrights__item}>
              @ Copyright. Company name. 2021
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
