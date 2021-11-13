/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Table.module.scss';

export const Table = ({ head, body }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {head.map((el) => (
              <th key={el.name}>{el.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => {
            const rowKey = `rowKey-${i}`;
            return (
              <tr key={rowKey}>
                {head.map((td) => td.process(row[td.key], `cellKey-${td.key}`))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
