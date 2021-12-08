/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export const InputField = ({ ...props }) => {
  console.log(props);
  return (
    <input
      className={styles.input}
      autoComplete='off'
      type='text'
      {...props.meta}
    />
  );
};

InputField.propTypes = {
  props: PropTypes.node,
};

InputField.defaultProps = {
  props: null,
};
