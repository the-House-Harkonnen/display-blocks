/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  HomeIcon,
  BlocksIcon,
  BakersIcon,
  ChartsIcon,
  EcosystemIcon,
} from '../Icons/Icons';
import styles from './Nav.module.scss';

const Nav = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav__list}>
      <li className={styles.nav__item}>
        <div className={styles.nav__icon}>
          <HomeIcon />
        </div>
        <a className={styles.nav__link} href='#'>
          Home
        </a>
      </li>
      <li className={styles.nav__item}>
        <div className={styles.nav__icon}>
          <BlocksIcon />
        </div>
        <a className={styles.nav__link} href='#'>
          Blocks
        </a>
        <div className={styles.nav__arrow} />
      </li>
      <li className={styles.nav__item}>
        <div className={styles.nav__icon}>
          <BakersIcon />
        </div>
        <a className={styles.nav__link} href='#'>
          Bakers
        </a>
        <div className={styles.nav__arrow} />
      </li>
      <li className={styles.nav__item}>
        <div className={styles.nav__icon}>
          <ChartsIcon />
        </div>
        <a className={styles.nav__link} href='#'>
          Charts
        </a>
      </li>
      <li className={styles.nav__item}>
        <div className={styles.nav__icon}>
          <EcosystemIcon />
        </div>
        <a className={styles.nav__link} href='#'>
          Ecosystem
        </a>
        <div className={styles.nav__arrow} />
      </li>
    </ul>
    <div className={styles.settings}>
      <p className={styles.settings__item}>Settings</p>
      <p className={styles.settings__item}>Blog</p>
      <p className={styles.settings__item}>Privacy</p>
      <p className={styles.settings__item}>Help</p>
    </div>
    <div className={styles.copyrights}>
      <p className={styles.copyrights__item}>@ Copyright. Company name. 2021</p>
    </div>
  </nav>
);

export default Nav;
