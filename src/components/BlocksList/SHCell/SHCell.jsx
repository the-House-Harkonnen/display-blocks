/* eslint-disable react/prop-types */
import React from 'react';
import styles from './SHCell.module.scss';

export const SHCell = ({ str, sort, callBack }) => {
  const className =
    !sort.inc && sort.key === str ? styles.arrowup : styles.arrowdown;
  const action = {
    type: sort.inc ? 'decrement' : 'increment',
    key: str,
  };
  return (
    <th onClick={() => callBack(action)} className={styles.cell}>
      <div className={styles.container}>
        <span className={styles.text}>{str}</span>
        <span className={className} />
      </div>
    </th>
  );
};
