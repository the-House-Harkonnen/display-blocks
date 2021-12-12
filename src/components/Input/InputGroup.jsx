/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { InputRow } from './InputRow';
import styles from './Input.module.scss';

export const InputGroup = ({ meta, label, help, children }) => {
  // console.log(meta);
  return (
    <div className={styles.row}>
      <label htmlFor='text' className={styles.label}>
        {label || true}
        <InputRow meta={meta}>{children}</InputRow>
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

// InputGroup.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   help: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// InputGroup.defaultProps = {
//   label: '',
//   help: '',
// };
