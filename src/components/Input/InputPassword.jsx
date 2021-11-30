/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
// import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { Input } from './Input';
import { FieldSwitcher } from '../FieldSwitcher';
import eye from '../../imgs/eye.svg';
import crossed from '../../imgs/crossed.svg';

export const InputPassword = ({ ...props }) => {
  const [isVisible, setIsVisible] = useState();
  const typeHandler = () => setIsVisible(!isVisible);

  const PasswordShowSwitcher = (
    <FieldSwitcher img={isVisible ? eye : crossed} callback={typeHandler} />
  );

  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      {...props}
      switcher={PasswordShowSwitcher}
    />
  );
};

InputPassword.propTypes = {
  props: PropTypes.node,
};

InputPassword.defaultProps = {
  props: null,
};
