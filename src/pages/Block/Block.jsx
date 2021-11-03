/* eslint-disable no-debugger */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Block.module.scss';
import background from '../../imgs/Background.png';

export const Block = () => {
  const location = useLocation();
  console.log(location, styles);

  return (
    <div className={styles.block}>
      <table>
        <tbody>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
          <tr>
            <td>Hush</td>
            <td>BLTZPtYMPfYzFSa1ZsouaRcL8iPPrLuazzZUNQ1s5uwK5S1RAGf</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
