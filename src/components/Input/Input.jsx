/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export const Input = ({ field }) => {
  console.log(field);
  return <input className={styles.input} autoComplete='off' {...field} />;
};
