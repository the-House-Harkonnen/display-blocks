/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import { BlocksPagination } from '../../components/BlocksPagination/BlocksPagination';
import { Crumbs } from '../../components/Crumbs';
import { useBlocksContext } from '../../context/blocksContext';
import styles from './Blocks.module.scss';

export const Blocks = () => {
  const { blocks } = useBlocksContext();

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
        disableSortBy: true,
      },
      {
        Header: '# of operations',
        accessor: 'number_of_operations',
        disableSortBy: true,
      },
      {
        Header: 'Volume',
        accessor: 'volume',
        disableSortBy: true,
      },
      {
        Header: '# of endorsements',
        accessor: 'endorsements',
        disableSortBy: true,
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
                    if (!column.canSort) {
                      return (
                        <th {...column.getHeaderProps()}>
                          {column.render('Header')}
                        </th>
                      );
                    }
                    const className = column.isSorted
                      ? column.isSortedDesc
                        ? `${styles.active} ${styles.down}`
                        : `${styles.active} ${styles.up}`
                      : ` ${styles.dormant} ${styles.up}`;
                    return (
                      <th
                        {...column.getHeaderProps()}
                        onClick={() =>
                          column.toggleSortBy(!column.isSortedDesc)
                        }
                      >
                        <div className={styles.container}>
                          <span className={styles.blue}>
                            {column.render('Header')}
                          </span>
                          <span className={className} />
                        </div>
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
