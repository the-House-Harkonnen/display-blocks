import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import { CellIcon } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { filtrBlockData } from './BlockUtils/filterBlockData';
import { Spinner } from '../../components/Spinner';
import { useSingleBlockContext } from '../../context/singleBlockContext';

export const Block = () => {
  const initialLocation = useLocation().pathname.split('/').pop(-1);
  const [location, setLocation] = useState(initialLocation);
  const { block, isFetching, setBlock } = useSingleBlockContext();

  useEffect(() => {
    setBlock(location);
  }, [location]);

  if (isFetching) return <Spinner />;
  const filtredBlock = filtrBlockData(block);

  return (
    <div className={styles.container}>
      <Crumbs />
      <div className={styles.head}>
        <button
          className={styles.btn}
          type='button'
          onClick={() => setLocation((prew) => Number(prew) - 1)}
        >{`<`}</button>
        <hgroup>
          <h2 className={styles.title}>Block: {location} </h2>
          <span className={styles.subtitle}>block information</span>
        </hgroup>
        <button
          type='button'
          className={styles.btn}
          onClick={() => setLocation((prew) => Number(prew) + 1)}
        >{`>`}</button>
      </div>
      <div className={styles.table}>
        {filtredBlock.map((row, i) => {
          const blockRowKey = `blockRowKey-${i}`;
          return (
            <div className={styles.row} key={blockRowKey}>
              <div className={styles.th}>{row[0]}</div>
              {row[0] === 'Baker' ? (
                <CellIcon src={block.baker} name={row[1]} alt={row[1]} />
              ) : (
                <div className={styles.th}>{row[1]}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
