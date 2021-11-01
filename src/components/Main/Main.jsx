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
          <Redirect to='/home/blocks' />
        </Route>
        <Route exact path='/home/blocks'>
          <Blocks />
        </Route>
        <Route exact path='home/blocks/:blockId'>
          <Block />
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
