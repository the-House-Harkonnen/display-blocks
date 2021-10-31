/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <a className={styles.nav__link} href='#'>
          Home
        </a>
      </li>
      <li className={styles.nav__item}>
        <a className={styles.nav__link} href='#'>
          Blocks
        </a>
      </li>
      <li className={styles.nav__item}>
        <a className={styles.nav__link} href='#'>
          Bakers
        </a>
      </li>
      <li className={styles.nav__item}>
        <a className={styles.nav__link} href='#'>
          Charts
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
