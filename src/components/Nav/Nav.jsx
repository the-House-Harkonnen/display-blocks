/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, createRef } from 'react';
import { useCallback } from 'react/cjs/react.development';
import {
  HomeIcon,
  BlocksIcon,
  BakersIcon,
  ChartsIcon,
  EcosystemIcon,
  UserIcon,
  BurgerIcon,
} from '../Icons/Icons';
// import LoginBtn from '../LoginBtn';
import styles from './Nav.module.scss';

const Nav = () => {
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
        <button type='button'>
          <UserIcon />
        </button>
        <button type='button' onClick={() => setShowNav(!showNav)}>
          <BurgerIcon />
        </button>
      </div>
      <div className={classNav} ref={navRef}>
        <nav className={styles.links}>
          <ul className={styles.links__list}>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <HomeIcon />
              </div>
              <a className={styles.links__link} href='#'>
                Home
              </a>
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <BlocksIcon />
              </div>
              <a className={styles.links__link} href='#'>
                Blocks
              </a>
              <div className={styles.links__arrow} />
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <BakersIcon />
              </div>
              <a className={styles.links__link} href='#'>
                Bakers
              </a>
              <div className={styles.links__arr} />
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <ChartsIcon />
              </div>
              <a className={styles.links__link} href='#'>
                Charts
              </a>
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <EcosystemIcon />
              </div>
              <a className={styles.links__link} href='#'>
                Ecosystem
              </a>
              <div className={styles.links__arrow} />
            </li>
          </ul>
          <div className={styles.settings}>
            <p className={styles.settings__item}>Settings</p>
            <p className={styles.settings__item}>Blog</p>
            <p className={styles.settings__item}>Privacy</p>
            <p className={styles.settings__item}>Help</p>
          </div>
          <div className={styles.copyrights}>
            <p className={styles.copyrights__item}>
              @ Copyright. Company name. 2021
            </p>
          </div>
        </nav>
        {/* <LoginBtn /> */}
      </div>
    </>
  );
};

export default Nav;
