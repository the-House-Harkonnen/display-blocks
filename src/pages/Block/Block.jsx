import React, { useEffect, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './Block.module.scss';
import { CellIcon } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { useSingleBlockContext } from '../../context/singleBlockContext';
import { Spinner } from '../../components/Spinner';
import { BlockTable } from '../../components/BlockTable';

export const Block = () => {
  const location = useLocation().pathname;
  const currentBlockNumber = location.split('/').pop(-1);
  const { block, isFetching, setBlock } = useSingleBlockContext();
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
          process: (data) => <div>{data.level}</div>,
        },
        {
          header: 'Created at:',
          process: (data) => <div>{data.timestamp}</div>,
        },
        {
          header: 'Baker:',
          process: (data) => (
            <CellIcon src={data.baker} name={data.bakerName} alt='Baker' />
          ),
        },
        {
          header: 'Baker`s fee:',
          process: (data) => <div>{data.fees}</div>,
        },
        {
          header: 'Baker`s priority:',
          process: (data) => <div>{data.priority}</div>,
        },
        {
          header: 'Transactions volume:',
          process: (data) => <div>{data.volume}</div>,
        },
        {
          header: 'Block time:',
          process: (data) => <div>{data.blockTime}</div>,
        },
        {
          header: 'Block fitness:',
          process: (data) => <div>{data.fitness}</div>,
        },
        {
          header: 'Gas used:',
          process: (data) => <div>{data.consumedGas}</div>,
        },
        {
          header: 'Protocol version:',
          process: (data) => <span>{data.protocol}</span>,
        },
        {
          header: 'Cycle:',
          process: (data) => <div>{data.metaCycle}</div>,
        },
        {
          header: 'Cycle position:',
          process: (data) => <div>{data.metaCyclePosition}</div>,
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
          type='button'
          onClick={() => handlePage(currentBlockNumber - 1)}
        >{`<`}</button>
        <hgroup>
          <h2 className={styles.title}>Block: {currentBlockNumber} </h2>
          <span className={styles.subtitle}>block information</span>
        </hgroup>
        <button
          type='button'
          className={styles.btn}
          onClick={() => handlePage(Number(currentBlockNumber) + 1)}
        >{`>`}</button>
      </div>
      <div className={styles.table}>
        {isFetching ? (
          <div className={styles.loader}>
            <Spinner />
          </div>
        ) : (
          <BlockTable cols={columnGroups} data={block} />
        )}
      </div>
    </div>
  );
};
