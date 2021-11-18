import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Block } from '../../pages/Block';

import { Blocks } from '../../pages/Blocks';
import NotResponding from '../../pages/NotResponding';

import styles from './Main.module.scss';
import background from '../../imgs/background.png';

const Main = () => {
  const style = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div className={styles.main} style={style}>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/home/blocks' />
        </Route>
        <Route exact path='/home'>
          <Redirect to='/home/blocks' />
        </Route>
        <Route exact path='/home/blocks' component={Blocks} />
        <Route exact path='/home/blocks/:blockId' component={Block} />
        <Route exact path='*' component={NotResponding} />
      </Switch>
    </div>
  );
};

export default Main;
