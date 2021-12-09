/* eslint-disable react/require-default-props */
import React, { useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './FieldSwitcher.module.scss';
import eye from '../../imgs/eye.svg';
import crossed from '../../imgs/crossed.svg';

const inputTypes = ['text', 'number', 'phone', 'email', 'password'];
export const FieldSwitcher = ({ type }) => {
  const isPassword = type === 'password';
  const ref = useRef();
  const hideFieldText = useCallback(() => {
    const parent = ref.current.parentElement;
    const input = parent.querySelector('input');
    const icon = ref.current.querySelector('img');

    if (input.type === 'password') {
      input.type = isPassword ? 'text' : type;
      icon.src = crossed;
    } else {
      input.type = 'password';
      icon.src = eye;
    }
  }, []);

  useEffect(() => {
    if (inputTypes.find((el) => el === type)) {
      ref.current.addEventListener('click', hideFieldText);
    }
  }, []);

  return (
    <button ref={ref} className={styles.icon} type='button'>
      <img src={eye} alt='show' />
    </button>
  );
};

FieldSwitcher.propTypes = {
  type: PropTypes.string,
};
FieldSwitcher.defaultProps = {
  type: 'text',
};
