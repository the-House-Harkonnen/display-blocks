/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from 'react';
import { BlocksPagination } from '../../components/BlocksPagination/BlocksPagination';
import { CellLinkIcon } from '../../components/Cell/Cell';
import { Crumbs } from '../../components/Crumbs';
import { Table } from '../../components/Table/Table';
import { useBlocksContext } from '../../contexts/blocksContext';
import { convertTezos } from '../../utils/convertTezos';
import { convertTimestamp } from '../../utils/convertTimestamp';
import { useThemeContext } from '../../contexts/themeContext';
import styles from './Blocks.module.scss';
import { Loader } from '../../components/Loader';

export const Blocks = () => {
  const [{ theme }] = useThemeContext();
  const { blocks, isFetching } = useBlocksContext();
  const columns = useMemo(
    () => [
      {
        Header: 'Block ID',
        accessor: 'level',
        Cell: ({ value }) => <span className={styles.blue}>{value}</span>,
      },
      {
        Header: 'Created',
        accessor: 'timestamp',
        // eslint-disable-next-line react/prop-types
        Cell: ({ value }) => (
          <span
            // style={{
            //   color: theme.color,
            // }}
            className={styles.red}
          >
            {convertTimestamp(value)}
          </span>
        ),
      },
      {
        Header: 'Baker',
        accessor: 'bakerName',
        Cell: (value) => (
          <CellLinkIcon
            src={value.row.original.baker}
            name={value.row.original.bakerName}
            href={value.row.original.level}
          />
        ),
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
        Cell: ({ value }) => convertTezos(value),
      },
      {
        Header: 'Fee',
        accessor: 'fees',
        disableSortBy: true,
        Cell: ({ value }) => convertTezos(value),
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
  return (
    <>
      <Crumbs />
      <h2 className={styles.title} style={{ color: theme.color }}>
        Blocks
      </h2>
      <div
        className={styles.list}
        style={{
          backgroundColor: theme.tableBackground,
          border: theme.tableBorder,
        }}
      >
        {isFetching && <Loader />}
        {blocks && (
          <div className={styles.table}>
            <Table columns={columns} data={data} />
          </div>
        )}
        <div className={styles.pagination}>
          <BlocksPagination />
        </div>
      </div>
    </>
  );
};
