/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useSortBy, useTable } from 'react-table';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Table.module.scss';

export const Table = ({ columns, data }) => {
  const [{ theme }] = useThemeContext();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => {
              if (!column.canSort) {
                return (
                  <th
                    {...column.getHeaderProps()}
                    className={styles.headers}
                    style={{
                      color: theme.tableHeaders,
                    }}
                  >
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
                  onClick={() => column.toggleSortBy(!column.isSortedDesc)}
                >
                  <div className={styles.container}>
                    <span
                      style={{
                        color: theme.tableHeaders,
                      }}
                    >
                      {column.render('Header')}
                    </span>
                    <span
                      className={className}
                      style={{
                        color: theme.pagination,
                      }}
                    />
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
                  <td
                    {...cell.getCellProps()}
                    style={{
                      color: theme.color,
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};
