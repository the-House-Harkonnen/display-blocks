/* eslint-disable arrow-body-style */
import React from 'react';
import { Block } from '../../pages/Block';
import { Blocks } from '../../pages/Blocks';

import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <Blocks />
      <Block />
    </div>
  );
};

export default Main;
