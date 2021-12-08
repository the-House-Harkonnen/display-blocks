/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */

import { useField } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Checkbox.module.scss';

export const Checkbox = ({ name }) => {
  const [{ theme }] = useThemeContext();
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField(name);
  return (
    <>
      <input
        className={styles.checkbox__input}
        type='checkbox'
        {...field}
        id={field.name}
        name={field.name}
      />
      <label
        style={{
          color: theme.formBtn,
        }}
        className={styles.checkbox__label}
        htmlFor={field.name}
      />
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};
