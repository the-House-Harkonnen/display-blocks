/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useContext, useReducer } from 'react';
import { BlocksContext } from '../BlocksProvider/BlocksProvider';
import { Table } from '../Table';
import { filtrListData } from './__utils/filtrListData';
import sortReducer from './__utils/sortReducer';
import { headCreator } from './__head/BlockListHead';
import { sortKeys } from './__utils/sortConfig';
import styles from './BlocksList.module.scss';
import { rowsCreator } from './__body/BlockListBody';
import { Pagination } from '../Pagination';

export const BlocksList = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  const sortHandler = (val) => sortDispatch(val);
  const { blocks } = useContext(BlocksContext);
  if (blocks.length < 1) return null;
  const filtredBlocks = filtrListData(blocks);
  const titles = Object.keys(filtredBlocks[0]);
  const headers = headCreator(titles, sort, sortHandler, sortKeys);
  const body = rowsCreator(filtredBlocks);

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