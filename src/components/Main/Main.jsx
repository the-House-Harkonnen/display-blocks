/* eslint-disable react/prop-types */
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
  const [{ theme, isDark }] = useThemeContext();
  const bgOpasity =
    isDark === false
      ? `${styles.container__light}`
      : `${styles.container__dark}`;

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme.mainBackground,
        color: theme.color,
      }}
    >
      <div className={bgOpasity}>
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
    </div>
  );
};

export default Main;
