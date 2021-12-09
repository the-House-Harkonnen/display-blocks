import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

export const InputRow = ({ meta, children }) => {
  const border =
    meta.error && meta.touched
      ? `${styles.border} ${styles.error}`
      : `${styles.border}`;

  return <div className={border}>{children}</div>;
};

InputRow.propTypes = {
  meta: PropTypes.shape({ error: PropTypes.string, touched: PropTypes.bool })
    .isRequired,
  children: PropTypes.node.isRequired,
};
