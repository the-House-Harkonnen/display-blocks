/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import eye from '../../imgs/eye.svg';
import crossed from '../../imgs/crossed.svg';

export const Input = ({
  name,
  label,
  type,
  children,
  promptMessage,
  ...props
}) => {
  const [field, meta] = useField(name);
  const [isVisible, setIsVisible] = useState(type !== 'password');

  const ShowFieldBtn =
    type === 'password' ? (
      <button
        className={styles.icon}
        type='button'
        onClick={() => setIsVisible(!isVisible)}
      >
        <img src={isVisible ? eye : crossed} alt='show' />
      </button>
    ) : null;

  const border =
    meta.touched && meta.error
      ? `${styles.border} ${styles.error}`
      : meta.touched && meta.value
      ? `${styles.border} ${styles.touched}`
      : `${styles.border} ${styles.normal}`;

  const promptError =
    // eslint-disable-next-line prettier/prettier
    ( meta.error && meta.value ) ? (
      <span className={styles.error}>
        <ErrorMessage name={field.name} />
      </span>
    ) : promptMessage ? (
      <span className={styles.prompt}>{promptMessage}</span>
    ) : null;

  return (
    <div className={styles.row}>
      <label htmlFor='text' className={styles.label}>
        {label}
      </label>
      <div className={border}>
        <input
          className={styles.input}
          autoComplete='off'
          type={isVisible ? 'text' : 'password'}
          {...field}
          {...props}
        />
        {ShowFieldBtn}
      </div>
      <div className={styles.bottom}>
        {promptError}
        {children}
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node,
  promptMessage: PropTypes.string,
  props: PropTypes.node,
};

Input.defaultProps = {
  children: null,
  promptMessage: '',
  props: null,
};
