import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldSwitcher.module.scss';

export const FieldSwitcher = ({ img, callback }) => {
  return (
    <button className={styles.icon} type='button' onClick={() => callback()}>
      <img src={img} alt='show' />
    </button>
  );
};

FieldSwitcher.propTypes = {
  img: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
