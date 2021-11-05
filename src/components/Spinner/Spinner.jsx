import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => (
  <div className={styles.loader}>
    <Loader type='Puff' color='#ffff' height={100} width={100} />
  </div>
);
