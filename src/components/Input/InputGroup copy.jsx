/* eslint-disable no-console */
import { useField } from 'formik';
import React, { cloneElement, Children } from 'react';
import PropTypes from 'prop-types';
import { InputRow } from './InputRow';
import styles from './Input.module.scss';

export const InputGroup = ({ name, label, help, type, children }) => {
  const [field, meta] = useField(name);

  return (
    <div className={styles.row}>
      <label htmlFor='text' className={styles.label}>
        {label || true}
        <InputRow meta={meta} field={field}>
          {Children.map(children, (child) => {
            if (child.props?.placeholder) {
              return cloneElement(child, {
                field,
                type,
              });
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

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  help: PropTypes.string,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {
  label: '',
  help: '',
};
