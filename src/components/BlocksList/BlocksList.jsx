/* eslint-disable no-console */
import React, { useContext, useReducer } from 'react';
import { BlocksContext } from '../BlocksProvider/BlocksProvider';
import { Table } from '../Table';
import { filtrListData } from './utils/filtrListData';
import sortReducer from './utils/sortReducer';
import { sortKeys } from './utils/sortConfig';
import styles from './BlocksList.module.scss';
import { Pagination } from '../Pagination';
import { Spiner } from '../Spiner';
import { BlocksListHead } from './BlocksListHead';
import { BlocksListBody } from './BlocksListBody';
import { sortDataHandler } from '../../utils/sortDataHandler';

export const BlocksList = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  const sortHandler = (val) => sortDispatch(val);
  const { blocks } = useContext(BlocksContext);
  if (blocks.length < 1) return <Spiner />;
  const filtredBlocks = filtrListData(blocks);
  const titles = Object.keys(filtredBlocks[0]);
  const headers = BlocksListHead(titles, sort, sortHandler, sortKeys);
  const sortedBlocks = sort.key
    ? sortDataHandler(sort.key, filtredBlocks, sort.inc)
    : filtredBlocks;
  const body = BlocksListBody(sortedBlocks);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Table head={headers} body={body} />
        <div className={styles.pagination}>
          <Pagination />
        </div>
      </div>
    </div>
  );
};
