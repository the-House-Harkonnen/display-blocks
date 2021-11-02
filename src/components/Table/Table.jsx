/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Table.module.scss';

export const Table = ({ head, body }) => (
  <table className={styles.table}>
    <thead>
      <tr>{head}</tr>
    </thead>
    <tbody>{body}</tbody>
  </table>
);
