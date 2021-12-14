import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import styles from './Login.module.scss';
import { useThemeContext } from '../../contexts/themeContext';
import { FormComponent } from '../../components/FormComponent';
import { FormCreator } from '../../utils/formCreator';
import { fieldsConfig } from './config';

export const Login = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();

  const formInstance = new FormCreator(fieldsConfig);
  const initialValues = formInstance.getInitialValues();
  const validationSchema = formInstance.validationSchema();

  const fields = formInstance.renderFields();

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

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
          <FormComponent fields={fields}>
            <div className={styles.login__bottom}>
              <span className={styles.login__question}>
                Don’t have a{' '}
                <span className={styles.login__span}>Tezos Explorer</span>
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
          </FormComponent>
        </Formik>
      </div>
    </div>
  );
};
