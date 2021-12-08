/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import styles from './Signup.module.scss';
import { Input } from '../../components/Input';
import { useThemeContext } from '../../contexts/themeContext';
import { FormComponent } from '../../components/FormComponent';
import { InputGroup } from '../../components/Input/InputGroup';
import { FieldSwitcher } from '../../components/FieldSwitcher';
import { Checkbox } from '../../components/Checkbox';

export const Signup = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();

  const validationSchema = yup.object({
    address: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.')
      .matches('@', 'Email address must contain the @ character')
      .email(),
    password: yup
      .string()
      .required('Required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character',
      ),
    confirm: yup
      .string()
      .required('Required')
      .min(8, 'Passwords do not match')
      // eslint-disable-next-line func-names
      .test('passwords-match', 'Passwords do not match', function (value) {
        // eslint-disable-next-line react/no-this-in-sfc
        return this.parent.password === value;
      }),
  });

  const initialValues = {
    address: '',
    password: '',
    confirm: '',
    agree: false,
  };

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const fields = (
    <>
<<<<<<< HEAD
      <Input
        placeholder='Enter your email address...'
        name='address'
        label='Email address'
      />
      <InputPassword
        placeholder='Enter your password...'
        name='password'
        label='Password'
      />
      <InputPassword
        placeholder='Confirm password...'
        name='confirm'
        label='Confirm password'
      >
        <div className={styles.signup__agree}>
          <Checkbox name='agree' />

          <span className={styles.signup__terms}>
            By creating an account, you agree to Tezos Explorer{' '}
            <a href='#' className={styles.signup__policy}>
              Terms of Service{' '}
            </a>
            <span>&</span>{' '}
            <a href='#' className={styles.signup__policy}>
              Privacy Policy.
            </a>
          </span>
        </div>
      </InputPassword>
=======
      <InputGroup name='address' label='address' type='text'>
        <Input placeholder='address' />
      </InputGroup>
      <InputGroup name='password' label='password' type='password'>
        <FieldSwitcher />
        <Input placeholder='password' />
        <FieldSwitcher />
      </InputGroup>
      {/* <InputGroup name='confirm' label='confirm' type='password'>
        <FieldSwitcher />
        <Input placeholder='confirm' />
      </InputGroup> */}
      <div className={styles.signup__agree}>
        <Checkbox name='agree' />
        <span className={styles.signup__terms}>
          By creating an account, you agree to Tezos Explorer{' '}
          <a href='#' className={styles.signup__policy}>
            Terms of Service{' '}
          </a>
          <span>&</span>{' '}
          <a href='#' className={styles.signup__policy}>
            Privacy Policy.
          </a>
        </span>
      </div>
>>>>>>> refactor(input): refactor input component
    </>
  );
  const bottom = (
    <div className={styles.signup__bottom}>
      <span className={styles.signup__question}> Already have an Account?</span>
      <button
        type='button'
        className={styles.signup__link}
        onClick={() => history.push('/home/login')}
      >
        Log In
      </button>
    </div>
  );

  return (
    <div
      className={styles.signup}
      style={{
        color: theme.color,
      }}
    >
      <hgroup className={styles.signup__info}>
        <h2 className={styles.signup__title}>Signup</h2>
        <span className={styles.signup__subtitle}>
          Get Started by Signing Up Now
        </span>
      </hgroup>
      <div className={styles.signup__form}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormComponent fields={fields} bottom={bottom} />
        </Formik>
      </div>
    </div>
  );
};
