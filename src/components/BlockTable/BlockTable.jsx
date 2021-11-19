import React from 'react';
import styles from './BlockTable.module.scss';

export const BlockTable = ({ cols, data }) => {
  return cols.map((group, i) => {
    const key = `group-key-${i}`;
    return (
      <div key={key} className={styles.row}>
        {group.map((column) => {
          return (
            <div className={styles.tr} key={column.header}>
              <div className={styles.th}>{column.header}</div>
              <div className={styles.td}>{column.process(data)}</div>
            </div>
          );
        })}
      </div>
    );
  });
};
