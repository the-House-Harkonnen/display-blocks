/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-console */
import React from 'react';
import { Form, Formik, Field } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import styles from './Signup.module.scss';
import { Input } from '../../components/Input';

export const Signup = () => {
  const history = useHistory();
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
    console.log(values);
  };

  return (
    <div className={styles.signup}>
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
          <Form className={styles.form}>
            <fieldset className={styles.form__group}>
              <Input name='address' label='Email address' type='text' />
              <Input
                name='password'
                label='Password'
                type='password'
                promptMessage={passwordPrompt}
              />
              <Input name='confirm' label='Confirm password' type='password'>
                <div className={styles.signup__agree}>
                  <Field
                    className={styles.checkbox}
                    type='checkbox'
                    id='agree'
                    name='agree'
                  />
                  <label className={styles.signup__checkbox} htmlFor='agree' />
                  <span className={styles.signup__terms}>
                    By creating an account, you agree to Tezos Explorer{' '}
                    <span className={styles.signup_blue}>
                      Terms of Service & Privacy Policy.
                    </span>
                  </span>
                </div>
              </Input>
            </fieldset>
            <input className={styles.form__btn} type='submit' value='Submit' />
            <div className={styles.signup__bottom}>
              <span> Already have an Account?</span>
              <button
                type='button'
                className={styles.signup__link}
                onClick={() => history.push('/home/login')}
              >
                Log In
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
