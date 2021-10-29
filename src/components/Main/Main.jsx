/* eslint-disable arrow-body-style */
import React from 'react';
import Table from '../Table';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <p className={styles.main__route}>Home &#62; Blocks</p>
      <h1>Blocks</h1>
      <div className={styles.main__table}>
        <Table />
      </div>
    </div>
  );
};

export default Main;
