import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import { getBlockFromApi } from '../../api';
import { ICell } from '../../components/Cell';
import { Crumbs } from '../../components/Crumbs/Crumbs';
import { Spiner } from '../../components/Spiner';
import { filtrBlockData } from './BlockUtils/filterBlockData';

export const Block = () => {
  const location = useLocation();
  const [blockId, setBlockId] = useState(location.pathname.split('/').pop(-1));
  const [block, setBlock] = useState(null);

  useEffect(async () => {
    const blockdata = await getBlockFromApi(blockId);
    setBlock(blockdata.block);
  }, [blockId]);
  if (!block) return <Spiner />;

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
        {filtredBlock.map((tbEl) => {
          console.log(tbEl);
          return (
            <tbody className={styles.tbody}>
              {Object.entries(tbEl).map((trEl) => {
                if (
                  trEl[0] === 'Backer.s fee' ||
                  trEl[0] === 'Transactions volume'
                )
                  return (
                    <tr>
                      <td>{trEl[0]}</td>
                      <td>{trEl[1]}&#42793;</td>
                    </tr>
                  );
                if (trEl[0] === 'Backer')
                  return (
                    <tr>
                      <td>{trEl[0]}</td>
                      <ICell src={block.backer} name={trEl[1]} alt={trEl[1]} />
                    </tr>
                  );
                return (
                  <tr>
                    <td>{trEl[0]}</td>
                    <td>{trEl[1]}</td>
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
