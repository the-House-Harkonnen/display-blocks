/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { BlocksList } from '../../components/BlocksList/BlocksList';
// import styles from './Blocks.module.scss';

export const Blocks = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <p>Home &#62; Blocks</p>
      <h2>Blocks</h2>
      <BlocksList />
    </div>
  );
};
