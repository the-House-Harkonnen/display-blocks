import React, { useState } from 'react';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import styles from './Signup.module.scss';
import { Input } from '../../components/Input';
import { useThemeContext } from '../../contexts/themeContext';
import { FormComponent } from '../../components/FormComponent';
import { InputGroup } from '../../components/Input/InputGroup';
import { BtnIcon } from '../../components/FieldSwitcher';
import { Checkbox } from '../../components/Checkbox';
import eye from '../../imgs/eye.svg';
import crossed from '../../imgs/crossed.svg';

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
      <Field name='address'>
        {({ meta, field }) => {
          const [isPassword, setPassword] = useState(true);
          return (
            <InputGroup name='address' label='Email Address' meta={meta}>
              <Input
                placeholder='Enter your email address...'
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
      <Field name='password'>
        {({ meta, field }) => {
          const [isPassword, setPassword] = useState(true);
          return (
            <InputGroup
              name='password'
              label='Password'
              meta={meta}
              help='Forgot password?'
            >
              <Input
                placeholder='Enter your password...'
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
      <Field name='confirm'>
        {({ meta, field }) => {
          const [isPassword, setPassword] = useState(true);
          return (
            <InputGroup label='Password' meta={meta}>
              <Input
                placeholder='Confirm password...'
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
      <div className={styles.signup__agree}>
        <Checkbox name='agree' />
        <span className={styles.signup__terms}>
          By creating an account, you agree to Tezos Explorer
          <a href='#top' className={styles.signup__policy}>
            &nbsp; Terms of Service&nbsp;
          </a>
          <span>&</span>
          <a href='#top' className={styles.signup__policy}>
            &nbsp;Privacy Policy.
          </a>
        </span>
      </div>
    </>
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
          <FormComponent fields={fields}>
            <div className={styles.signup__bottom}>
              <span className={styles.signup__question}>
                Already have an Account?
              </span>
              <button
                type='button'
                className={styles.signup__link}
                onClick={() => history.push('/home/login')}
              >
                Log In
              </button>
            </div>
          </FormComponent>
        </Formik>
      </div>
    </div>
  );
};
