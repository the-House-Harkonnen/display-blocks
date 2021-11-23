/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React from 'react';
import styles from './Input.module.scss';
import eye from '../../imgs/eye.svg';

export const Input = () => {
  return (
    <div className={styles.row}>
      <label htmlFor='text' className={styles.label}>
        Email address
      </label>
      <div className={styles.border}>
        <input type='text' className={styles.input} id='text' />
        <button className={styles.icon} type='button'>
          <img src={eye} alt='show' />
        </button>
      </div>
      <div className={styles.bottom}>
        <span className={styles.error}>
          Email address must contain the @ character
        </span>
        <button type='button' className={styles.help}>
          Forgot password?
        </button>
      </div>
    </div>
  );
};
