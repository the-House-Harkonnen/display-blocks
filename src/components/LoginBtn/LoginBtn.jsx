import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './LoginBtn.module.scss';

const LoginBtn = () => {
  const history = useHistory();
  return (
    <button
      type='button'
      onClick={() => history.push('/home/login')}
      className={styles.btn}
    >
      Login
    </button>
  );
};

export default LoginBtn;
