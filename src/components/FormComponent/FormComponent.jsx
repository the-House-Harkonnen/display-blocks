import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import styles from './FormComponent.module.scss';
import { useThemeContext } from '../../contexts/themeContext';

export const FormComponent = ({ fields, children }) => {
  const [{ theme }] = useThemeContext();
  return (
    <Form
      className={styles.form}
      style={{
        border: theme.tableBorder,
      }}
    >
      <fieldset className={styles.form__group}>{fields}</fieldset>
      <input
        className={styles.form__btn}
        style={{
          backgroundColor: theme.formBtn,
        }}
        type='submit'
        value='Submit'
      />
      {children}
    </Form>
  );
};

FormComponent.propTypes = {
  fields: PropTypes.node.isRequired,
  children: PropTypes.node,
};

FormComponent.defaultProps = {
  children: '',
};
