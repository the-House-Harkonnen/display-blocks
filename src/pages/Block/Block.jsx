/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import background from '../../imgs/Background.png';
import { getBlockFromApi } from '../../api';
import { ICell } from '../../components/Cell';

export const Block = () => {
  const location = useLocation();
  const blockId = location.pathname.split('/').pop(-1);
  const [block, setBlock] = useState(null);

  useEffect(async () => {
    const blockdata = await getBlockFromApi(blockId);
    setBlock(blockdata.block);
  }, []);
  console.log(block);
  if (!block) return null;
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Block :{blockId} </h2>
      <table>
        <tbody>
          <tr>
            <td>Hush:</td>
            <td>{block.hash}</td>
          </tr>
          <tr>
            <td>Created at:</td>
            <td>{block.timestamp}</td>
          </tr>
          <tr>
            <td>Backer:</td>
            <ICell
              src={block.baker}
              name={block.bakerName}
              alt={block.bakerName}
            />
          </tr>
          <tr>
            <td>Backer.s fee:</td>
            <td>{block.fees}</td>
          </tr>
          <tr>
            <td>Backer.s priority</td>
            <td>{block.priority}</td>
          </tr>
          <tr>
            <td>Transactions volume:</td>
            <td>{block.volume}</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Block time:</td>
            <td>{block.blockTime}</td>
          </tr>
          <tr>
            <td>Block fitness:</td>
            <td>{block.fitness}</td>
          </tr>
          <tr>
            <td>Gas used:</td>
            <td>{block.consumedGas}</td>
          </tr>
          <tr>
            <td>Protocol version:</td>
            <td>{block.protocol}</td>
          </tr>
          <tr>
            <td>Cycle:</td>
            <td>{block.metaCycle}</td>
          </tr>
          <tr>
            <td>Cycle position:</td>
            <td>{block.metaCyclePosition}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
