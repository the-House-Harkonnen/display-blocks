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
  const [{ theme }] = useThemeContext();

  // const [hover, setHover] = useState(false);
  // const hoverStyle = {
  //   background: hover ? color : theme.tableRowHover,
  // };

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
        {headerGroups.map((headerGroup) => (
          <tr
            className={styles.head__tr}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => {
              if (!column.canSort) {
                return (
                  <th
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
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className={styles.body}
        style={{
          color: theme.color,
        }}
      >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              // style={hoverStyle}
              // of='group'
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              className={styles.body__row}
            >
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={styles.body__td}>
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
