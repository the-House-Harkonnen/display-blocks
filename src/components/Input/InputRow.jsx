/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Input.module.scss';

export const InputRow = ({ meta, children }) => {
  const border =
    meta.touched && meta.error
      ? `${styles.border} ${styles.error}`
      : meta.touched && meta.value
      ? `${styles.border} ${styles.touched}`
      : `${styles.border} ${styles.normal}`;
  return <div className={border}>{children}</div>;
};
