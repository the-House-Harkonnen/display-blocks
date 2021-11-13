/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import { BlocksPagination } from '../../components/BlocksPagination/BlocksPagination';
import { Crumbs } from '../../components/Crumbs';
import { Spinner } from '../../components/Spinner';
import { Table } from '../../components/Table';
import { useBlocksContext } from '../../context/blocksContext';
import styles from './Blocks.module.scss';
import sortReducer from './utils/sortReducer';
import { CellLinkIcon, CellLinkOption } from '../../components/Cell';

export const Blocks = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });
  const sortHandler = (val) => sortDispatch(val);

  const headConfig = [
    {
      name: 'Block ID',
      key: 'level',
      process: (value = '____', key) => <td key={key}>{value}</td>,
    },
    {
      name: 'Created',
      key: 'timestamp',
      process: (value, key) => <td key={key}>{value}</td>,
    },
    {
      name: 'Baker',
      key: 'bakerName',
      process: (value = 'no baker', key) => <td key={key}>{value}</td>,
    },
    {
      name: 'Priority',
      key: 'priority',
      process: (value, key) => <td key={key}>{value}</td>,
    },
    {
      name: '# of operations',
      key: 'number_of_operations',
      process: (value, key) => <td key={key}>{value}</td>,
    },
    {
      name: 'Volume',
      key: 'volume',
      process: (value, key) => <td key={key}>{value}</td>,
    },
    {
      name: '# of endorsements',
      key: 'endorsements',
      process: (value, key) => <td key={key}>{value}</td>,
    },
  ];

  const { blocks, isFetching } = useBlocksContext();
  if (isFetching) return <Spinner />;

  return (
    <>
      <Crumbs />
      <h2 className={styles.title}>Blocks</h2>
      <div className={styles.list}>
        <div className={styles.table}>
          <Table head={headConfig} body={blocks} />
        </div>
        <div className={styles.pagination}>
          <BlocksPagination />
        </div>
      </div>
    </>
  );
};
