/* eslint-disable no-console */
import PropTypes from 'prop-types';

import React from 'react';
import styles from './Input.module.scss';

export const Input = ({ placeholder, field, type }) => {
  const { name, value, onChange, onBlur } = field;
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
  field: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  }),
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  type: 'text',
  field: {
    name: '',
    value: '',
    onChange: () => null,
    onBlur: () => null,
  },
};
