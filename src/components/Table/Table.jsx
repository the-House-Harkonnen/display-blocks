/* eslint-disable react/prop-types */
import React from 'react';
import { CellSortOption } from '../Cell';
import styles from './Table.module.scss';

export const Table = ({ head, body, sortHandler, sort }) => {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {head.map((el) =>
              el.sort ? (
                <CellSortOption
                  key={el.key}
                  sort={sort}
                  str={el.name}
                  callBack={sortHandler}
                />
              ) : (
                <th key={el.name}>{el.name}</th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => {
            const rowKey = `rowKey-${i}`;
            return (
              <tr key={rowKey}>
                {head.map((td) => {
                  const cellKey = `cellKey-${i}-${row[td.key]}`;
                  return td.process ? (
                    td.process(row, cellKey)
                  ) : (
                    <td key={cellKey}>{row[td.key]}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
