import React from 'react';
import { BlocksList } from '../../components/BlocksList/BlocksList';
import { Crumbs } from '../../components/Crumbs';

export const Blocks = () => (
  <div>
    <Crumbs />
    <h2>Blocks</h2>
    <BlocksList />
  </div>
);
