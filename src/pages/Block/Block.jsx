/* eslint-disable no-console */
import React, { useEffect, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Block.module.scss';
import { CellIcon } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { useSingleBlockContext } from '../../contexts/singleBlockContext';
import { BlockTable } from '../../components/BlockTable';
import { Loader } from '../../components/Loader';
// import { useThemeContext } from '../../contexts/themeContext';
import { convertTimestamp } from '../../utils/convertTimestamp';
import { convertBlockId } from '../../utils/convertBlockId';

export const Block = () => {
  const location = useLocation().pathname;
  const currentBlockNumber = location.split('/').pop(-1);
  const { block, isFetching, setBlock } = useSingleBlockContext();
  // const [{ theme }] = useThemeContext();
  const history = useHistory();
  const handlePage = (val) => history.push(location.replace(/[^\\/]*$/, val));

  useEffect(() => {
    setBlock(currentBlockNumber);
  }, [location]);

  const columnGroups = useMemo(
    () => [
      [
        {
          header: 'Hash:',
          accessor: 'operationsHash',
          process: (data) => (
            <div className={styles.item}>{data.operationsHash}</div>
          ),
        },
        {
          header: 'Block time:',
          accessor: 'blockTime',
          process: (data) => (
            <div className={styles.item}>{data.blockTime} sec</div>
          ),
        },
        {
          header: 'Created at:',
          accessor: 'timestamp',
          process: (data) => (
            <div className={styles.item}>
              {convertTimestamp(data.timestamp)}
            </div>
          ),
        },
        {
          header: 'Block fitness:',
          accessor: 'fitness',
        },
        {
          header: 'Baker:',
          accessor: 'bakerName',
          process: (data) => (
            <CellIcon src={data.baker} name={data.bakerName} alt='Baker' />
          ),
        },
        {
          header: 'Gas used:',
          accessor: 'consumedGas',
          process: (data) => (
            <div className={styles.item}>{data.consumedGas}</div>
          ),
        },
        {
          header: 'Baker`s fee:',
          accessor: 'fees',
          process: (data) => <div className={styles.item}>{data.fees}</div>,
        },
        {
          header: 'Protocol version:',
          accessor: 'protocol',
          process: ({ protocol }) => (
            <div className={styles.item}>{`${protocol.slice(
              0,
              8,
            )}...${protocol.slice(-5)}`}</div>
          ),
        },
        {
          header: 'Baker`s priority:',
          accessor: 'priority',
        },
        {
          header: 'Cycle:',
          accessor: 'metaCycle',
        },
        {
          header: 'Transactions volume:',
          accessor: 'volume',
        },
        {
          header: 'Cycle position:',
          accessor: 'metaCyclePosition',
        },
      ],
    ],
    [block],
  );

  return (
    <div className={styles.container}>
      <Crumbs />
      <div className={styles.head}>
        <button
          className={styles.head__btn}
          type='button'
          onClick={() => handlePage(currentBlockNumber - 1)}
        >{`<`}</button>
        <hgroup className={styles.head__hgroup}>
          <h2 className={styles.head__title}>
            Block: {convertBlockId(currentBlockNumber)}{' '}
          </h2>
          <span className={styles.head__subtitle}>block information</span>
        </hgroup>
        <button
          type='button'
          className={styles.head__btn}
          onClick={() => handlePage(Number(currentBlockNumber) + 1)}
        >{`>`}</button>
      </div>
      <div
        className={styles.table}
        // style={{
        //   backgroundColor: theme.tableBackground,
        //   border: theme.tableBorder,
        //   color: theme.color,
        // }}
      >
        {isFetching && <Loader />}
        {block && <BlockTable cols={columnGroups} data={block} />}
      </div>
    </div>
  );
};
