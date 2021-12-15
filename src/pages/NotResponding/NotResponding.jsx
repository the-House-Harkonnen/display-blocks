/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useApiContext } from '../../contexts/apiContexts';
import { useThemeContext } from '../../contexts/themeContext';

import styles from './NotResponding.module.scss';

const NotResponding = () => {
  const [{ theme }] = useThemeContext();
  const { networkList, handleNetwork } = useApiContext();
  return (
    <div
      className={styles.container}
      style={{
        color: theme.color,
      }}
    >
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        Sorry, the page you’re looking for can’t be found
      </h2>
      <div className={styles.btn}>
        <button
          type='button'
          className={styles.btn__home}
          style={{
            color: theme.homeBtnColor,
            backgroundColor: theme.homeBtn,
          }}
        >
          <a
            href='#'
            className={styles.btn__link}
            onClick={() => handleNetwork(networkList[0].value)}
          >
            Home page
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotResponding;
