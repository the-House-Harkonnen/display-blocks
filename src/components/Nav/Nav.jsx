import React, { useState, useEffect, createRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react/cjs/react.development';
import { UserIcon, BurgerIcon } from '../Icons/Icons';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Nav.module.scss';
<<<<<<< HEAD
import NavLink from '../NavLink/NavLink';

const Nav = () => {
=======
import { DropDown } from '../DropDown/DropDown';
import { useApiContext } from '../../contexts/apiContexts';

const Nav = () => {
  const { network, networkList, handleNetwork } = useApiContext();
  const options = networkList.map((el) => el.value);

>>>>>>> Refactor/api (#82)
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
<<<<<<< HEAD
          <NavLink />
          <span
=======
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
              <DropDown
                name={network}
                options={options}
                callBack={handleNetwork}
              />
            </li>
            <li className={styles.links__item}>
              <a className={styles.links__link} href='#'>
                Charts
              </a>
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
              <div className={styles.links__arrow} />
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
            <li className={styles.links__item}>
              <div className={styles.links__icon}>
                <EcosystemIcon />
              </div>
              <DropDown
                name={network}
                options={options}
                callBack={handleNetwork}
              />
            </li>
          </ul>
          <div
>>>>>>> Refactor/api (#82)
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
