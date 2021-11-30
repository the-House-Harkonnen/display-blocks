/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useSortBy, useTable } from 'react-table';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Table.module.scss';

export const Table = ({ columns, data }) => {
  const [{ theme, isDark }] = useThemeContext();

  const hoverRow = isDark === false ? `${styles.dark}` : `${styles.light}`;

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
      <thead
        className={styles.head}
        style={{
          color: theme.tableHeaders,
        }}
      >
        {/* https://github.com/tannerlinsley/react-table/discussions/2647 */}
        {headerGroups.map((headerGroup) => {
          // const { key, ...restHeaderGroupProps } =
          headerGroup.getHeaderGroupProps();
          return (
            <tr
              // key={key}
              className={styles.head__tr}
              {...headerGroup.getHeaderGroupProps()}
              // {...restHeaderGroupProps}
            >
              {headerGroup.headers.map((column) => {
                // const { key, ...restColumn } = column.getHeaderProps();
                if (!column.canSort) {
                  return (
                    <th
                      // key={key}
                      // {...restColumn}
                      {...column.getHeaderProps()}
                      className={styles.head__headers}
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
                    className={styles.head__th}
                    {...column.getHeaderProps()}
                    onClick={() => column.toggleSortBy(!column.isSortedDesc)}
                  >
                    <div className={styles.head__container}>
                      <span className={styles.head__header}>
                        {column.render('Header')}
                      </span>
                      <span className={className} />
                    </div>
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody {...getTableBodyProps()} className={styles.body}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <>
              <tr
                {...row.getRowProps()}
                className={hoverRow}
                style={{
                  color: theme.tableLine,
                }}
              >
                {row.cells.map((cell) => {
                  // const { key, ...restCellProps } = cell.getCellProps();
                  return (
                    <td
                      // key={key}
                      // {...restCellProps}
                      {...cell.getCellProps()}
                      className={styles.body__td}
                      style={{
                        color: theme.color,
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            </>
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
