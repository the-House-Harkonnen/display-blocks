/* eslint-disable prettier/prettier */
/* eslint-disable no-console */

import React, { useContext } from 'react';
import { BlocksContext } from '../BlocksProvider/BlocksProvider';
import styles from './Table.module.scss';

export const Table = () => {
  const { blocks } = useContext(BlocksContext);

  if (blocks.length > 0) {
    // console.log(blocks[0]);
    // const arrOfTitleStrings = Object.keys(blocks[0]);
    // console.log(arrOfTitleStrings);
    // titles

    const arrOfRowsStrings = blocks.map(block=>Object.entries(block));
    console.log(arrOfRowsStrings[0]);
    // rows












    
  }

  return <div className={styles.table}>data</div>;
};
