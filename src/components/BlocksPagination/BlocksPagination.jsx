import React from 'react';
import { useBlocksContext } from '../../contexts/blocksContext';
import styles from './BlocksPagination.module.scss';
import { useThemeContext } from '../../contexts/themeContext';

export const BlocksPagination = () => {
  const [{ theme }] = useThemeContext();
  const { limit, offset, totalCount, handleLimit, handleOffset } =
    useBlocksContext();
  const totalPage = Math.ceil(totalCount / limit);
  const lastPage =
    totalCount % limit ? totalCount - (totalCount % limit) : totalCount - limit;

  const currentPage = offset / limit + 1;
  return (
    <div className={styles.container}>
      <div
        className={styles.limit}
        style={{
          color: theme.pagination,
        }}
        id='handler'
      >
        Rows per page: {limit}
        <label
          htmlFor='select'
          className={styles.arrow}
          style={{
            color: theme.pagination,
          }}
        >
          <select
            name='select'
            id='select'
            className={styles.select}
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
          style={{
            color: theme.pagination,
          }}
          disabled={!offset}
          onClick={() => handleOffset(0)}
        >{`<<`}</button>
        <button
          disabled={!offset}
          type='button'
          style={{
            color: theme.pagination,
          }}
          onClick={() => handleOffset(offset - limit)}
        >{`<`}</button>
        <span
          style={{
            color: theme.pagination,
          }}
        >
          {currentPage} of {totalPage}
        </span>
        <button
          type='button'
          style={{
            color: theme.pagination,
          }}
          disabled={lastPage === offset}
          onClick={() => handleOffset(offset + limit)}
        >{`>`}</button>
        <button
          disabled={lastPage === offset}
          style={{
            color: theme.pagination,
          }}
          type='button'
          onClick={() => handleOffset(lastPage)}
        >{`>>`}</button>
      </div>
    </div>
  );
};
