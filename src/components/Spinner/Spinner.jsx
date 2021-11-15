import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const Spinner = () => (
  <div className={styles.loader}>
    <Loader type='Puff' color='#D9DFF8' height={400} width={300} />
  </div>
);
