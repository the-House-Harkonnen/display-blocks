/* eslint-disable no-console */
import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.scss';
import { FormComponent } from '../../components/FormComponent';
import { fieldsConfig } from './config';
import { FormCreator } from '../../utils/formCreator';

export const Signup = () => {
  const history = useHistory();

  const formInstance = new FormCreator(fieldsConfig);
  const initialValues = formInstance.getInitialValues();
  const validationSchema = formInstance.validationSchema();

  const handleSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);
    axios
      .post('http://151.115.59.252:1323/api/auth/sign-up', {
        email: 'oberig@gmail.com',
        password: 'Vova111#',
      })
      .then((r) => console.log(r));
  };

  const fields = formInstance.getFields();

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
