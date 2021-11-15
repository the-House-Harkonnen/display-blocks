import React, { useReducer } from 'react';
import { BlocksPagination } from '../../components/BlocksPagination/BlocksPagination';
import { Crumbs } from '../../components/Crumbs';
import { Spinner } from '../../components/Spinner';
import { Table } from '../../components/Table';
import { useBlocksContext } from '../../context/blocksContext';
import styles from './Blocks.module.scss';
import sortReducer from './utils/sortReducer';
import { CellLinkIcon } from '../../components/Cell';

export const Blocks = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });
  const sortHandler = (val) => sortDispatch(val);

  const headConfig = [
    {
      name: 'Block ID',
      sort: true,
      key: 'level',
      process: (row, key) => <td key={key}>{row.level}</td>,
    },
    {
      name: 'Created',
      sort: true,
      key: 'timestamp',
      process: (row, key) => <td key={key}>{row.timestamp}</td>,
    },
    {
      name: 'Baker',
      key: 'bakerName',
      process: (row, key) => (
        <CellLinkIcon
          src={row.baker}
          name={row.bakerName}
          alt={row.baker}
          href={row.level}
          key={key}
        />
      ),
    },
    {
      name: 'Priority',
      key: 'priority',
      process: (row, key) => <td key={key}>{row.priority}</td>,
    },
    {
      name: '# of operations',
      key: 'number_of_operations',
      process: (row, key) => <td key={key}>{row.number_of_operations}</td>,
    },
    {
      name: 'Volume',
      key: 'volume',
      process: (row, key) => <td key={key}>{row.volume}</td>,
    },
    {
      name: '# of endorsements',
      sort: true,
      key: 'endorsements',
      process: (row, key) => <td key={key}>{row.endorsements}</td>,
    },
  ];

  const { blocks, isFetching } = useBlocksContext();

  return (
    <>
      <Crumbs />
      <h2 className={styles.title}>Blocks</h2>
      <div className={styles.list}>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.table}>
              <Table
                head={headConfig}
                body={blocks}
                sortHandler={sortHandler}
                sort={sort}
              />
            </div>
            <div className={styles.pagination}>
              <BlocksPagination />
            </div>
          </>
        )}
      </div>
    </>
  );
};
