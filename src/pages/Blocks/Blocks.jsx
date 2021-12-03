/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useMemo } from 'react';
import { BlocksPagination } from '../../components/BlocksPagination';
import { CellIcon, CellLinkOption } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs';
import { Table } from '../../components/Table';
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
        Cell: (value) => {
          const {
            row: {
              original: { level },
            },
          } = value;
          return <CellLinkOption cell={level} />;
        },
      },
      {
        Header: 'Created',
        accessor: 'timestamp',
        Cell: ({ value }) => (
          <span className={styles.span}>{convertTimestamp(value)}</span>
        ),
      },
      {
        Header: 'Baker',
        accessor: 'bakerName',
        Cell: (value) => {
          const {
            row: {
              original: { bakerName, baker },
            },
          } = value;
          return <CellIcon name={bakerName} src={baker} />;
        },
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
