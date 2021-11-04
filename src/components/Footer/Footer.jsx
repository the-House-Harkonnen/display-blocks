/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../Logo/Logo';
import styles from './Footer.module.scss';

// eslint-disable-next-line arrow-body-style
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__links}>
        <div className={styles.footer__group}>
          <a className={styles.footer__item} href='#'>
            Home
          </a>
          <a className={styles.footer__item} href='#'>
            Blocks
          </a>
          <a className={styles.footer__item} href='#'>
            Bakers
          </a>
        </div>
        <div className={styles.footer__group}>
          <a className={styles.footer__item} href='#'>
            Home
          </a>
          <a className={styles.footer__item} href='#'>
            Charts
          </a>
          <a className={styles.footer__item} href='#'>
            Assets
          </a>
        </div>
        <div className={styles.footer__group}>
          <a className={styles.footer__item} href='#'>
            Ecosystem
          </a>
          <a className={styles.footer__item} href='#'>
            Home
          </a>
          <a className={styles.footer__item} href='#'>
            Home
          </a>
        </div>
      </div>
      <div className={styles.footer__rights}>
        <p>@ Copyright. Company name. 2021</p>
      </div>
      <div className={styles.footer__logo}>
        <Logo />
      </div>
    </div>
  );
};

export default Footer;
