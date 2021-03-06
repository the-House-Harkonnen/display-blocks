/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useNetworkContext } from '../../contexts/networkContext';

import styles from './NotResponding.module.scss';

const NotResponding = () => {
  const { networkList, handleNetwork } = useNetworkContext();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>
        Sorry, the page you’re looking for can’t be found
      </h2>
      <div className={styles.btn}>
        <button type='button' className={styles.btn__home}>
          <a
            href='#'
            className={styles.btn__link}
            onClick={() => handleNetwork(networkList[0])}
          >
            Home page
          </a>
        </button>
      </div>
    </div>
  );
};

export default NotResponding;
