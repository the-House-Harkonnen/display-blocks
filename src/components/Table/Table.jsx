import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

export const Table = ({ head, body }) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr>{head}</tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  </div>
);

Table.propTypes = {
  head: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};
