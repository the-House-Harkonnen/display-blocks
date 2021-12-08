/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import { Field, useField } from 'formik';
import React, { cloneElement, Children } from 'react';
import { InputRow } from '.';
import styles from './Input.module.scss';

export const InputGroup = ({ name, label, help, ...props }) => {
  const [field, meta] = useField(name);
  const { type } = props;
  return (
    <div className={styles.row}>
      <label htmlFor='text' className={styles.label}>
        {label}
        <InputRow meta={meta}>
          {Children.map(props.children, (child) => {
            if (child.props?.placeholder) {
              return cloneElement(child, { field, meta, type });
            }
            return cloneElement(child, { type });
          })}
        </InputRow>
      </label>
      <div className={styles.bottom}>
        {meta.touched && meta.error && (
          <span className={styles.condition}>{meta.error}</span>
        )}
        {help && (
          <button type='button' className={styles.help}>
            {help}
          </button>
        )}
      </div>
    </div>
  );
};
