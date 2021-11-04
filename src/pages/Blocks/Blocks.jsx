/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BlocksList } from '../../components/BlocksList/BlocksList';
import { Crumbs } from '../../components/Crumbs';
// import styles from './Blocks.module.scss';

export const Blocks = () => {
  return (
    <div>
      <Crumbs />
      <h2>Blocks</h2>
      <BlocksList />
    </div>
  );
};
