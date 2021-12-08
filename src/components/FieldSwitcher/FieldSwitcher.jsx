/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
/* eslint-disable no-console */
import React, { useCallback, useRef, useState, useEffect } from 'react';
import styles from './FieldSwitcher.module.scss';
import eye from '../../imgs/eye.svg';
import crossed from '../../imgs/crossed.svg';

const inputTypes = ['text', 'number', 'phone', 'email', 'password'];
export const FieldSwitcher = ({ type, ...props }) => {
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
