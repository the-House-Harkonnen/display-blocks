/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

import { BlocksContext } from '../BlocksProvider/BlocksProvider';
import styles from './Pagination.module.scss';

export const Pagination = () => {
  const { limit, offset, totalCount, handleLimit, handleOffset } =
    useContext(BlocksContext);
  const totalPage = Math.ceil(totalCount / limit);
  const lastPage = totalCount - (totalCount % limit);

  const curentPage = offset / limit + 1;
  return (
    <div className={styles.container}>
      <div className={styles.limit} id='handler'>
        rows per page: {limit}
        <label htmlFor='select' className={styles.arrow}>
          <select
            name='select'
            id='select'
            className='select'
            onChange={(e) => handleLimit(e.target.value)}
            value={limit}
          >
            <option value='10'>10</option>
            <option value='30'>30</option>
            <option value='50'>50</option>
            <option value='70'>70</option>
            <option value='100'>100</option>
          </select>
        </label>
      </div>

      <div className={styles.offset}>
        <button
          type='button'
          disabled={!offset}
          onClick={() => handleOffset(0)}
        >{`<<`}</button>
        <button
          disabled={!offset}
          type='button'
          onClick={() => handleOffset(offset - limit)}
        >{`<`}</button>
        <span>
          {offset / limit + 1} of {totalPage}
        </span>
        <button
          type='button'
          onClick={() => handleOffset(offset + limit)}
        >{`>`}</button>
        <button
          type='button'
          onClick={() => handleOffset(lastPage)}
        >{`>>`}</button>
      </div>
    </div>
  );
};
