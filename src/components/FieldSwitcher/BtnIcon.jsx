import React from 'react';
import PropTypes from 'prop-types';
import styles from './FieldSwitcher.module.scss';

export const BtnIcon = ({ img, onClick }) => {
  return (
    <button className={styles.icon} type='button' onClick={onClick}>
      <img src={img} alt='show' />
    </button>
  );
};

BtnIcon.propTypes = {
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

BtnIcon.defaultProps = {
  onClick: () => null,
};
