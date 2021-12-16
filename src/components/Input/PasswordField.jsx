import React, { useState } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import { BtnIcon } from '../FieldSwitcher';
import { Input } from '.';
import eye from '../../imgs/eye.svg';
import crossed from '../../imgs/crossed.svg';
import { InputGroup } from './InputGroup';

export const PasswordField = ({ name, placeholder, help }) => {
  return (
    <Field name={name}>
      {({ meta, field }) => {
        const [isPassword, setPassword] = useState(true);
        return (
          <InputGroup name='password' label='Password' meta={meta} help={help}>
            <Input
              placeholder={placeholder}
              field={field}
              type={isPassword ? 'password' : 'text'}
            />
            <BtnIcon
              img={isPassword ? crossed : eye}
              onClick={() => setPassword(!isPassword)}
            />
          </InputGroup>
        );
      }}
    </Field>
  );
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  help: PropTypes.string,
  placeholder: PropTypes.string,
};

PasswordField.defaultProps = {
  help: '',
  placeholder: '',
};
