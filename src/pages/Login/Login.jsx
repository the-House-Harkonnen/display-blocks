/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-console */
import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import { Input } from '../../components/Input';

export const Login = () => {
  const history = useHistory();
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
      .min(4, 'Too short - should be 4 chars minimum.'),
    confirm: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.')
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  const initialValues = {
    address: '',
    password: '',
    confirm: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.login}>
      <hgroup className={styles.login__info}>
        <h2 className={styles.login__title}>Login</h2>
        <span className={styles.login__subtitle}>
          Welcome back! Log In with your Email
        </span>
      </hgroup>
      <div className={styles.login__form}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className={styles.form}>
            <fieldset className={styles.form__group}>
              <Input name='address' label='Email address' type='text' />
              <Input name='password' label='Password' type='password' />
              <Input name='confirm' label='Confirm password' type='password'>
                <button type='button' className={styles.login__help}>
                  Forgot password?
                </button>
              </Input>
            </fieldset>
            <input className={styles.form__btn} type='submit' value='Submit' />
            <div className={styles.login__bottom}>
              <span> Don’t have a Tezos Explorer Account?</span>
              <button
                type='button'
                className={styles.login__link}
                onClick={() => history.push('/home/login')}
              >
                Sing up Now?
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
