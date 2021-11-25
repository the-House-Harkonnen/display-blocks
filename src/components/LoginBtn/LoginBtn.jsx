import React from 'react';
import { useHistory } from 'react-router-dom';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './LoginBtn.module.scss';

const LoginBtn = () => {
  const history = useHistory();
  const [{ theme }] = useThemeContext();
  return (
    <button
      type='button'
      onClick={() => history.push('/home/login')}
      className={styles.btn}
      style={{
        color: theme.color,
        backgroundColor: theme.loginBtn,
      }}
    >
      Login
    </button>
  );
};

export default LoginBtn;
