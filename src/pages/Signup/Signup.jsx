/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-this-in-sfc */

import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import styles from './Signup.module.scss';
import { Input } from '../../components/Input';
import { useThemeContext } from '../../contexts/themeContext';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { FormComponent } from '../../components/FormComponent';

export const Signup = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();
  const passwordPrompt =
    'Password should contain both letter and number, with minimum length of 8 characters';

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
      .min(
        8,
        'Password should contain both letter and number, with minimum length of 8 characters',
      ),
    confirm: yup
      .string()
      .required('Required')
      .min(
        8,
        'Password should contain both letter and number, with minimum length of 8 characters',
      )
      // eslint-disable-next-line func-names
      .test('passwords-match', 'Passwords must match', function (value) {
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
      <Input name='address' label='Email address' type='text' />
      <Input
        name='password'
        label='Password'
        type='password'
        promptMessage={passwordPrompt}
      />
      <Input name='confirm' label='Confirm password' type='password'>
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
      </Input>
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
