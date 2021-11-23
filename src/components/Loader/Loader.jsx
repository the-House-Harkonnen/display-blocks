import React from 'react';
import loaderIcon from '../../imgs/loaderIcon.svg';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loader}>
      <img src={loaderIcon} className={styles.loader__icon} alt='...loading' />
    </div>
  );
};
