import React from 'react';
import * as yup from 'yup';
import { PasswordField } from '../../components/Input/PasswordField';
import { Terms } from '../../components/Terms';

export const fieldsConfig = [
  {
    name: 'address',
    label: 'Email Address',
    placeholder: 'Confirm your password...',
    type: 'email',
    value: '',
    validation: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.')
      .matches('@', 'Email address must contain the @ character')
      .email(),
  },
  {
    name: 'password',
    type: 'password',
    label: 'Enter your password...',
    placeholder: 'Confirm your password...',
    value: '',
    validation: yup
      .string()
      .required('Required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
    render() {
      return <PasswordField name={this.name} placeholder={this.placeholder} />;
    },
  },
  {
    name: 'confirm',
    type: 'password',
    label: 'Confirm your password...',
    placeholder: 'Confirm your password...',
    value: '',
    validation: yup
      .string()
      .required('Required')
      .min(8, 'Passwords do not match')
      // eslint-disable-next-line func-names
      .test('passwords-match', 'Passwords do not match', function (value) {
        // eslint-disable-next-line react/no-this-in-sfc
        return this.parent.password === value;
      }),
    render() {
      return <PasswordField name={this.name} placeholder={this.placeholder} />;
    },
  },
  {
    name: 'agree',
    type: 'checkbox',
    value: false,
    render() {
      return <Terms name={this.name} />;
    },
  },
];
