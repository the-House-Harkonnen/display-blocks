import React from 'react';
import { Input } from '../../components/Input';
import styles from './Login.module.scss';

export const Login = () => {
  return (
    <div className={styles.login}>
      <hgroup className={styles.login__info}>
        <h2 className={styles.login__title}>Login</h2>
        <span className={styles.login__subtitle}>
          Welcome back! Log In with your Email
        </span>
      </hgroup>
      <div className={styles.login__form}>
        <form action='#' className={styles.form}>
          <fieldset className={styles.form__group}>
            <Input />
            <Input />
            <Input />
          </fieldset>
          <input className={styles.form__btn} type='submit' value='Submit' />
          <div className={styles.form__bottom}>
            <span className={styles.form__bottom_text}>
              Already have an Account?
            </span>
            <span className={styles.form__bottom_link}> Sing up Now?</span>
          </div>
        </form>
      </div>
    </div>
  );
};
