/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useMemo, useReducer } from 'react';
import { useTable, useSortBy } from 'react-table';
import { BlocksPagination } from '../../components/BlocksPagination/BlocksPagination';
import { Crumbs } from '../../components/Crumbs';
import { Spinner } from '../../components/Spinner';
import { useBlocksContext } from '../../context/blocksContext';
import styles from './Blocks.module.scss';
import sortReducer from './utils/sortReducer';

export const Blocks = () => {
  const [sort, sortDispatch] = useReducer(sortReducer, { inc: true, key: '' });
  const sortHandler = (val) => sortDispatch(val);

  const { blocks, isFetching } = useBlocksContext();

  const columns = useMemo(
    () => [
      {
        Header: 'Block ID',
        accessor: 'level',
      },
      {
        Header: 'Created',
        accessor: 'timestamp',
      },
      {
        Header: 'Baker',
        accessor: 'bakerName',
      },
      {
        Header: 'Priority',
        accessor: 'priority',
      },
      {
        Header: '# of operations',
        accessor: 'number_of_operations',
      },
      {
        Header: 'Volume',
        accessor: 'volume',
      },
      {
        Header: '# of endorsements',
        accessor: 'endorsements',
      },
    ],
    [blocks],
  );
  const data = useMemo(() => blocks, [blocks]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );
  // in table getTableProps for table tag;
  // {...column.getHeaderProps(  )}

  if (isFetching) return <Spinner />;

  return (
    <>
      <Crumbs />
      <h2 className={styles.title}>Blocks</h2>
      <div className={styles.list}>
        <div className={styles.table}>
          <table {...getTableProps()} className={styles.table}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => {
                    return (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted
                            ? column.isSortedDec
                              ? 'ᐯ'
                              : 'ᐱ'
                            : ' '}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className={styles.pagination}>
          <BlocksPagination />
        </div>
      </div>
    </>
  );
};
