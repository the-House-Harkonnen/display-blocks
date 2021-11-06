/* eslint-disable no-console */
import React, { useReducer } from 'react';
import { Table } from '../../../components/Table';
import { filtrListData } from './utils/filtrListData';
import sortReducer from './utils/sortReducer';
import { sortKeys } from './utils/sortConfig';
import styles from './BlocksList.module.scss';
import { BlocksListHead } from './BlocksListHead';
import { BlocksListBody } from './BlocksListBody';
import { sortDataHandler } from '../../../utils/sortDataHandler';
import { Spinner } from '../../../components/Spinner';
import { useBlocksContext } from '../../../context/blocksContext';
import { BlocksPagination } from '../../../components/BlocksPagination/BlocksPagination';

export const BlocksList = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  const sortHandler = (val) => sortDispatch(val);
  const { blocks, isFetching } = useBlocksContext();
  console.log(blocks, isFetching);

  if (isFetching) return <Spinner />;

  const filtredBlocks = filtrListData(blocks);
  const titles = Object.keys(filtredBlocks[0]);

  const sortedBlocks = sort.key
    ? sortDataHandler(sort.key, filtredBlocks, sort.inc)
    : filtredBlocks;

  const headers = BlocksListHead(titles, sort, sortHandler, sortKeys);
  const body = BlocksListBody(sortedBlocks);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <Table head={headers} body={body} />
        <div className={styles.pagination}>
          <BlocksPagination />
        </div>
      </div>
    </div>
  );
};
