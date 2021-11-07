import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

export const Table = ({ children }) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr>{children[0]}</tr>
      </thead>
      <tbody>{children[1]}</tbody>
    </table>
  </div>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};
