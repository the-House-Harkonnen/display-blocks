/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
