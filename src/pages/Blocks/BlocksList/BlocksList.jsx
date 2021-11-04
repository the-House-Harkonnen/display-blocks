import React, { useContext, useReducer } from 'react';
import { Table } from '../../../components/Table';
import { filtrListData } from './utils/filtrListData';
import sortReducer from './utils/sortReducer';
import { sortKeys } from './utils/sortConfig';
import styles from './BlocksList.module.scss';
import { Pagination } from '../../../components/Pagination';
import { BlocksListHead } from './BlocksListHead';
import { BlocksListBody } from './BlocksListBody';
import { sortDataHandler } from '../../../utils/sortDataHandler';
import { Spinner } from '../../../components/Spinner';
import { BlocksContext } from '../../../components/BlocksProvider';

export const BlocksList = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  const sortHandler = (val) => sortDispatch(val);
  const { blocks } = useContext(BlocksContext);

  if (blocks.length < 1) return <Spinner />;

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
          <Pagination />
        </div>
      </div>
    </div>
  );
};
