import React from 'react';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './LoginBtn.module.scss';

const LoginBtn = () => {
  const [{ theme }] = useThemeContext();
  return (
    <button
      type='button'
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
