import React from 'react';
import styles from './BlockTable.module.scss';

export const BlockTable = ({ cols, data }) => {
  return cols.map((group, i) => {
    const key = `group-key-${i}`;
    return (
      <div key={key} className={styles.row}>
        {group.map((column) => {
          return (
            <div className={styles.row__tr} key={column.header}>
              <div className={styles.row__th}>{column.header}</div>
              <div className={styles.row__td}>
                {column.process ? column.process(data) : data[column.accessor]}
              </div>
            </div>
          );
        })}
      </div>
    );
  });
};
