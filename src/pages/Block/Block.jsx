import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react/cjs/react.development';
import styles from './Block.module.scss';
import { CellIcon } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { useSingleBlockContext } from '../../context/singleBlockContext';
import { Spinner } from '../../components/Spinner';

export const Block = () => {
  const initialLocation = useLocation().pathname.split('/').pop(-1);
  const [location, setLocation] = useState(initialLocation);
  const { block, isFetching, setBlock } = useSingleBlockContext();

  useEffect(() => {
    setBlock(location);
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
      ],
      [
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
          onClick={() => setLocation((prev) => Number(prev) - 1)}
        >{`<`}</button>
        <hgroup>
          <h2 className={styles.title}>Block: {location} </h2>
          <span className={styles.subtitle}>block information</span>
        </hgroup>
        <button
          type='button'
          className={styles.btn}
          onClick={() => setLocation((prev) => Number(prev) + 1)}
        >{`>`}</button>
      </div>
      <div className={styles.table}>
        {isFetching ? (
          <div className={styles.loader}>
            <Spinner />
          </div>
        ) : (
          columnGroups.map((group, i) => {
            const key = `group-key-${i}`;
            return (
              <div key={key} className={styles.row}>
                {group.map((column) => {
                  return (
                    <tr className={styles.tr} key={column.header}>
                      <div className={styles.th}>{column.header}</div>
                      <div className={styles.td}>{column.process(block)}</div>
                    </tr>
                  );
                })}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
