/* eslint-disable arrow-body-style */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Block } from '../../pages/Block';
import { Blocks } from '../../pages/Blocks';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/blocks' />
        </Route>
        <Route exact path='/blocks'>
          <Blocks />
        </Route>
        <Route exact path='/blocks/:blockId'>
          <Block />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
