import React from 'react';
import { BlocksList } from './BlocksList';
import { Crumbs } from '../../components/Crumbs';
import styles from './Blocks.module.scss';

export const Blocks = () => (
  <div>
    <Crumbs />
    <h2 className={styles.title}>Blocks</h2>
    <BlocksList />
  </div>
);
