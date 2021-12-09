import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import { Input } from '../../components/Input';
import { useThemeContext } from '../../contexts/themeContext';
import { FormComponent } from '../../components/FormComponent';
import { InputGroup } from '../../components/Input/InputGroup';
import { FieldSwitcher } from '../../components/FieldSwitcher';

export const Login = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();
  const validationSchema = yup.object({
    address: yup
      .string()
      .required('Required')
      .min(4, 'Too short - should be 4 chars minimum.')
      .matches('@', 'Email address must contain the @ character')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
      .email(),
    password: yup
      .string()
      .required('Please Enter your password')
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
    test: yup.string().required('required'),
  });

  const initialValues = {
    address: '',
    password: '',
    confirm: '',
    test: '',
  };

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const bottom = (
    <div className={styles.login__bottom}>
      <span className={styles.login__question}>
        Don’t have a <span className={styles.login__span}>Tezos Explorer</span>
        Account?
      </span>
      <button
        type='button'
        className={styles.login__link}
        onClick={() => history.push('/home/signup')}
      >
        Sing up Now?
      </button>
    </div>
  );

  const fields = (
    <>
      <InputGroup name='address' label='Email Address' type='text'>
        <Input placeholder='Enter your email address...' />
      </InputGroup>
      <InputGroup name='password' label='Password' type='password'>
        <Input placeholder='Enter your password...' />
        <FieldSwitcher />
      </InputGroup>
      <InputGroup
        name='confirm'
        label='Confirm password'
        type='password'
        help='Forgot password?'
      >
        <Input placeholder='Confirm password...' />
        <FieldSwitcher />
      </InputGroup>
    </>
  );

  return (
    <div
      className={styles.login}
      style={{
        color: theme.color,
      }}
    >
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
          <FormComponent fields={fields} bottom={bottom} />
        </Formik>
      </div>
    </div>
  );
};
