/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import { BlocksBody } from '../../components/BlocksBody';
import { BlocksHead } from '../../components/BlocksHead';
import { BlocksPagination } from '../../components/BlocksPagination/BlocksPagination';
import { Crumbs } from '../../components/Crumbs';
import { Spinner } from '../../components/Spinner';
import { Table } from '../../components/Table';
import { useBlocksContext } from '../../context/blocksContext';
import styles from './Blocks.module.scss';
import { sortKeys } from './utils/sortConfig';
import sortReducer from './utils/sortReducer';

export const Blocks = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });
  const sortHandler = (val) => sortDispatch(val);

  const { blocks, isFetching } = useBlocksContext();
  if (isFetching) return <Spinner />;

  return (
    <>
      <Crumbs />
      <h2 className={styles.title}>Blocks</h2>
      <div className={styles.list}>
        <div className={styles.table}>
          <Table>
            <BlocksHead
              sort={sort}
              callback={sortHandler}
              sortKeys={sortKeys}
            />
            <BlocksBody sort={sort} />
          </Table>
        </div>
        <div className={styles.pagination}>
          <BlocksPagination />
        </div>
      </div>
    </>
  );
};
