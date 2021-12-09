/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import React from 'react';
import styles from './Input.module.scss';

export const Input = ({ placeholder, name, value, onChange, onBlur, type }) => {
  return (
    <input
      type={type}
      className={styles.input}
      placeholder={placeholder}
      autoComplete='off'
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  name: '',
  value: '',
  type: 'text',
  onChange: () => null,
  onBlur: () => null,
};
