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
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Nav.module.scss';

const Nav = () => {
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
              <a className={styles.links__link} href='#'>
                Home
              </a>
            </li>
            <li className={styles.links__item}>
              <a className={styles.links__link} href='#'>
                Blocks
              </a>
              <div className={styles.links__arrow} />
            </li>
            <li className={styles.links__item}>
              <a className={styles.links__link} href='#'>
                Bakers
              </a>
              <div className={styles.links__arr} />
            </li>
            <li className={styles.links__item}>
              <a className={styles.links__link} href='#'>
                Charts
              </a>
            </li>
            <li className={styles.links__item}>
              <a className={styles.links__link} href='#'>
                Ecosystem
              </a>
              <div className={styles.links__arrow} />
            </li>
          </ul>
          <ul
            className={styles.links__burger}
            style={{
              backgroundColor: theme.burgerBackground,
            }}
          >
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <HomeIcon />
              </div>
              <a
                className={styles.links__link}
                style={{
                  color: theme.color,
                }}
                href='#'
              >
                Home
              </a>
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <BlocksIcon />
              </div>
              <a
                className={styles.links__link}
                style={{
                  color: theme.color,
                }}
                href='#'
              >
                Blocks
              </a>
              <div
                className={styles.links__arrow}
                style={{
                  color: theme.color,
                }}
              />
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <BakersIcon />
              </div>
              <a
                className={styles.links__link}
                style={{
                  color: theme.color,
                }}
                href='#'
              >
                Bakers
              </a>
              <div
                className={styles.links__arrow}
                style={{
                  color: theme.color,
                }}
              />
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <ChartsIcon />
              </div>
              <a
                className={styles.links__link}
                style={{
                  color: theme.color,
                }}
                href='#'
              >
                Charts
              </a>
            </li>
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <EcosystemIcon />
              </div>
              <a
                className={styles.links__link}
                style={{
                  color: theme.color,
                }}
                href='#'
              >
                Ecosystem
              </a>
              <div
                className={styles.links__arrow}
                style={{
                  color: theme.color,
                }}
              />
            </li>
          </ul>
          <div
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
            <p
              className={styles.settings__item}
              style={{
                color: theme.color,
              }}
            >
              Settings
            </p>
            <p
              className={styles.settings__item}
              style={{
                color: theme.color,
              }}
            >
              Blog
            </p>
            <p
              className={styles.settings__item}
              style={{
                color: theme.color,
              }}
            >
              Privacy
            </p>
            <p
              className={styles.settings__item}
              style={{
                color: theme.color,
              }}
            >
              Help
            </p>
          </div>
          <div
            className={styles.copyrights}
            style={{
              backgroundColor: theme.burgerBackground,
            }}
          >
            <div
              className={styles.line}
              style={{
                backgroundColor: theme.burgerMenuLine,
              }}
            />
            <p
              className={styles.copyrights__item}
              style={{
                color: theme.color,
              }}
            >
              @ Copyright. Company name. 2021
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
