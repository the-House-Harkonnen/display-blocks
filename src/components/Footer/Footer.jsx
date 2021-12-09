/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Footer.module.scss';

const Footer = () => {
  const [{ theme }] = useThemeContext();
  const location = useLocation();
  const arr = location.pathname.split('/');
  const lenght = arr.length;
  const currLocation = arr[lenght - 1];
  const config = ['login', 'signup'];

  return (
    <div style={{ backgroundColor: theme.backgroundColor }}>
      {config.find((el) => el === currLocation) ? (
        <>
          <div className={styles.footer__login}>
            <div className={styles.footer__logoLogin}>
              <Logo />
            </div>
            <div className={styles.footer__rightsLogin}>
              @ Copyright. Company name. 2021
            </div>
          </div>
        </>
      ) : (
        <>
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
              @ Copyright. Company name. 2021
            </div>
            <div className={styles.footer__logo}>
              <Logo />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
