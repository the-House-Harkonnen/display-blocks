/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { useContext, useReducer } from 'react';
import { BlocksContext } from '../BlocksProvider/BlocksProvider';
import { Table } from '../Table';
import { filtrListData } from './__utils/filtrListData';
import sortReducer from './__utils/sortReducer';
import { headCreator } from './__head/BlockListHead';
import { rowsCreator } from './__body/BlockListBody';
import { linkKeys } from './__utils/linkConfig';
import { sortKeys } from './__utils/sortConfig';

export const BlocksList = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });

  const sortHandler = (val) => sortDispatch(val);
  const { blocks } = useContext(BlocksContext);
  if (blocks.length < 1) return null;
  const filtredBlocks = filtrListData(blocks);

  const titles = Object.keys(filtredBlocks[0]);
  const rows = filtredBlocks.map((row) => Object.entries(row));

  const headers = headCreator(titles, sort, sortHandler, sortKeys);
  const body = rowsCreator(rows, linkKeys);

  return <Table head={headers} body={body} />;
};
