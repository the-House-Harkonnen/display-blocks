/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import { getBlockFromApi } from '../../api';
import { ICell } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';

import { filtrBlockData } from './BlockUtils/filterBlockData';
import { Spinner } from '../../components/Spinner';

export const Block = () => {
  const location = useLocation();
  const [blockId, setBlockId] = useState(location.pathname.split('/').pop(-1));
  const [block, setBlock] = useState(null);

  useEffect(async () => {
    const blockdata = await getBlockFromApi(blockId);
    setBlock(blockdata.block);
  }, [blockId]);
  if (!block) return <Spinner />;
  const filtredBlock = filtrBlockData(block);
  return (
    <div className={styles.block}>
      <Crumbs />
      <div className={styles.pagination}>
        <button
          className={styles.btn}
          type='button'
          onClick={() => setBlockId((prev) => Number(prev) - 1)}
        >{`<`}</button>
        <h2 className={styles.title}>Block :{blockId} </h2>
        <button
          type='button'
          className={styles.btn}
          onClick={() => setBlockId((prev) => Number(prev) + 1)}
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
