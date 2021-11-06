/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import { ICell } from '../../components/Cell';
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
    <div className={styles.block}>
      <Crumbs />
      <div className={styles.pagination}>
        <button
          className={styles.btn}
          type='button'
          onClick={() => setLocation((prew) => Number(prew) - 1)}
        >{`<`}</button>
        <h2 className={styles.title}>Block :{location} </h2>
        <button
          type='button'
          className={styles.btn}
          oonClick={() => setLocation((prew) => Number(prew) + 1)}
        >{`>`}</button>
      </div>
      <table className={styles.table}>
        {filtredBlock.map((tbEl, i) => {
          const keybody = `keybody-${i}`;
          return (
            <tbody className={styles.tbody} key={keybody}>
              {Object.entries(tbEl).map((trEl) => {
                const key = `key-${trEl[0]}-${trEl[1]}`;
                if (
                  trEl[0] === 'Backer.s fee' ||
                  trEl[0] === 'Transactions volume'
                )
                  return (
                    <tr key={key} className={styles.tr}>
                      <td className={styles.td}>{trEl[0]}</td>
                      <td className={styles.th}>{trEl[1]}&#42793;</td>
                    </tr>
                  );
                if (trEl[0] === 'Backer') {
                  return (
                    <tr key={key} className={styles.tr}>
                      <td className={styles.td}>{trEl[0]}</td>
                      <ICell src={block.baker} name={trEl[1]} alt={trEl[1]} />
                    </tr>
                  );
                }
                return (
                  <tr key={key} className={styles.tr}>
                    <td className={styles.td}>{trEl[0]}</td>
                    <td className={styles.th}>{trEl[1]}</td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
