/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import background from '../../imgs/Background.png';
import { getBlockFromApi } from '../../api';

export const Block = () => {
  const location = useLocation();
  const blockId = location.pathname.split('/').pop(-1);
  const [block, setBlock] = useState(null);

  useEffect(async () => {
    const blockdata = await getBlockFromApi(blockId);
    setBlock(blockdata.block);
  }, []);

  if (!block) return null;
  return (
    <div className={styles.block}>
      <h2 className={styles.title}>Block :{blockId} </h2>
      <table>
        <tbody>
          <tr>
            <td>Hush:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Created at:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Backer:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Backer.s fee:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Backer.s priority</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Transactions volume:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Block time:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Block fitness:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Gas used:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Protocol version:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Cycle:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Cycle position:</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
