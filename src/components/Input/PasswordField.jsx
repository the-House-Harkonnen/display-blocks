/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Field } from 'formik';
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
              img={isPassword ? eye : crossed}
              onClick={() => setPassword(!isPassword)}
            />
          </InputGroup>
        );
      }}
    </Field>
  );
};
