/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Block } from '../../pages/Block';
import { Blocks } from '../../pages/Blocks';
import NotResponding from '../../pages/NotResponding';
import { useThemeContext } from '../../contexts/themeContext';

import styles from './Main.module.scss';
import { Login } from '../../pages/Login';
import { Signup } from '../../pages/Signup';

const Main = () => {
  const [{ theme, isDark }, toggleTheme] = useThemeContext();
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: theme.mainBackground, color: theme.color }}
    >
      <div className={styles.toggle}>
        <button
          className={styles.toggle__btn}
          style={{ backgroundColor: theme.toggleBtn }}
          type='button'
          onClick={toggleTheme}
        >
          {isDark ? '🌞' : '🌜'}
        </button>
      </div>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home/blocks' />
        </Route>
        <Route exact path='/home'>
          <Redirect to='/home/blocks' />
        </Route>
        <Route exact path='/home/blocks' component={Blocks} />
        <Route exact path='/home/blocks/:blockId' component={Block} />
        <Route exact path='/home/login' component={Login} />
        <Route exact path='/home/signup' component={Signup} />
        <Route exact path='*' component={NotResponding} />
      </Switch>
    </div>
  );
};

export default Main;
