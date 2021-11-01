/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useContext, useReducer } from 'react';
import { BlocksContext } from '../BlocksProvider/BlocksProvider';
import { Table } from '../Table/Table';
// import { Table } from '../Table';
import { filtrListData } from './blocklistUtils/filtrListData';
import sortReducer from './blocklistUtils/sortReducer';
import { headCreator, rowsCreator, SHCell } from './Cell/Cell';

export const BlocksList = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  const sortHandler = (val) => sortDispatch(val);
  const { blocks } = useContext(BlocksContext);
  if (blocks.length < 1) return null;
  const filtredBlocks = filtrListData(blocks);

  console.log(filtredBlocks);
  const titles = Object.keys(filtredBlocks[0]);
  const rows = filtredBlocks.map((row) => Object.entries(row));

  const headers = headCreator(titles, sort, sortHandler);
  const body = rowsCreator(rows);
  console.log(body);

  return <Table head={headers} body={body} />;
};
