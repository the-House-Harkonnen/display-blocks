/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
/* eslint-disable guard-for-in */
/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.scss';

export const Table = ({ head, body }) => {



  console.log(body[0], head);

  const row = []
  for (const iterator in head) {
    const {key} = head[iterator];

    console.log(body[0][key])
    row.push(body[0][key])

  }
  console.log(row)


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
        {/* <tbody /> */}
      </table>
    </div>
  );
};
