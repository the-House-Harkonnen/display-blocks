import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => (
  <div className={styles.loader}>
    <Loader type='TailSpin' color='#00BFFF' height={100} width={100} />
  </div>
);
