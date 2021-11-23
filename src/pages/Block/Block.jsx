import React, { useEffect, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Block.module.scss';
import { CellIcon } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { useSingleBlockContext } from '../../contexts/singleBlockContext';
import { BlockTable } from '../../components/BlockTable';
import { Loader } from '../../components/Loader';
import { useThemeContext } from '../../contexts/themeContext';

export const Block = () => {
  const location = useLocation().pathname;
  const currentBlockNumber = location.split('/').pop(-1);
  const { block, isFetching, setBlock } = useSingleBlockContext();
  const [{ theme }] = useThemeContext();
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
          process: (data) => (
            <div
              className={styles.item}
              // style={{
              //   color: theme.color,
              // }}
            >
              {data.level}
            </div>
          ),
        },
        {
          header: 'Created at:',
          process: (data) => (
            <div className={styles.item}>{data.timestamp}</div>
          ),
        },
        {
          header: 'Baker:',
          process: (data) => (
            <CellIcon src={data.baker} name={data.bakerName} alt='Baker' />
          ),
        },
        {
          header: 'Baker`s fee:',
          process: (data) => <div className={styles.item}>{data.fees}</div>,
        },
        {
          header: 'Baker`s priority:',
          process: (data) => <div className={styles.item}>{data.priority}</div>,
        },
        {
          header: 'Transactions volume:',
          process: (data) => <div className={styles.item}>{data.volume}</div>,
        },
        {
          header: 'Block time:',
          process: (data) => (
            <div className={styles.item}>{data.blockTime}</div>
          ),
        },
        {
          header: 'Block fitness:',
          process: (data) => <div className={styles.item}>{data.fitness}</div>,
        },
        {
          header: 'Gas used:',
          process: (data) => (
            <div className={styles.item}>{data.consumedGas}</div>
          ),
        },
        {
          header: 'Protocol version:',
          process: (data) => (
            <span className={styles.item}>{data.protocol}</span>
          ),
        },
        {
          header: 'Cycle:',
          process: (data) => (
            <div className={styles.item}>{data.metaCycle}</div>
          ),
        },
        {
          header: 'Cycle position:',
          process: (data) => (
            <div className={styles.item}>{data.metaCyclePosition}</div>
          ),
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
          className={styles.btn}
          style={{
            color: theme.color,
          }}
          type='button'
          onClick={() => handlePage(currentBlockNumber - 1)}
        >{`<`}</button>
        <hgroup>
          <h2
            className={styles.title}
            style={{
              color: theme.color,
            }}
          >
            Block: {currentBlockNumber}{' '}
          </h2>
          <span
            className={styles.subtitle}
            style={{
              color: theme.color,
            }}
          >
            block information
          </span>
        </hgroup>
        <button
          type='button'
          className={styles.btn}
          style={{
            color: theme.color,
          }}
          onClick={() => handlePage(Number(currentBlockNumber) + 1)}
        >{`>`}</button>
      </div>
      <div
        className={styles.table}
        style={{
          backgroundColor: theme.tableBackground,
          border: theme.tableBorder,
        }}
      >
        {isFetching && <Loader />}
        {block && <BlockTable cols={columnGroups} data={block} />}
      </div>
    </div>
  );
};
