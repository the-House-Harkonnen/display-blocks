/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export const Input = ({ name, label, type, children, switcher, ...props }) => {
  console.log(name, switcher);

  const [field, meta] = useField(name);

  const border =
    meta.touched && meta.error
      ? `${styles.border} ${styles.error}`
      : meta.touched && meta.value
      ? `${styles.border} ${styles.touched}`
      : `${styles.border} ${styles.normal}`;

  return (
    <div className={styles.row}>
      <label htmlFor='text' className={styles.label}>
        {label}
      </label>
      <div className={border}>
        <input
          className={styles.input}
          autoComplete='off'
          type={type}
          {...field}
          {...props}
        />
        {switcher}
      </div>
      <div className={styles.bottom}>
        <span className={styles.condition}>
          <ErrorMessage name={field.name} />
        </span>
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
  switcher: PropTypes.node,
  props: PropTypes.node,
};

Input.defaultProps = {
  children: null,
  props: null,
  switcher: null,
};
