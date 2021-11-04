import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spiner.module.scss';

export const Spiner = () => (
  <div className={styles.loader}>
    <Loader type='Puff' color='#ffff' height={100} width={100} />
  </div>
);
