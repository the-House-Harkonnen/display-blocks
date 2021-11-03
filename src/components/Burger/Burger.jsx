import React from 'react';
import styles from './Burger.module.scss';

export const Burger = () => (
  <button type='button' className={styles.btn}>
    <span className={styles.icon} />
  </button>
);
