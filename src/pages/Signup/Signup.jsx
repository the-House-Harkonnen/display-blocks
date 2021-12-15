/* eslint-disable no-console */
import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import styles from './Signup.module.scss';
import { useThemeContext } from '../../contexts/themeContext';
import { FormComponent } from '../../components/FormComponent';
import { fieldsConfig } from './config';
import { FormCreator } from '../../utils/formCreator';

export const Signup = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();

  const formInstance = new FormCreator(fieldsConfig);
  const initialValues = formInstance.getInitialValues();
  const validationSchema = formInstance.validationSchema();
  console.log(validationSchema);

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
  };

  const fields = formInstance.getFields();

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
