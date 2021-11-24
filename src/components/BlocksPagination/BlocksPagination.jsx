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
    <div
      className={styles.pagination}
      style={{
        color: theme.pagination,
      }}
    >
      <div id='handler' className={styles.pagination__handler}>
        Rows per page:
        <label htmlFor='select' className={styles.pagination__arrow}>
          <select
            name='select'
            id='select'
            className={styles.pagination__select}
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

      <div className={styles.pagination__offset}>
        <button
          className={styles.pagination__button}
          type='button'
          disabled={!offset}
          onClick={() => handleOffset(0)}
        >{`<<`}</button>
        <button
          disabled={!offset}
          type='button'
          className={styles.pagination__button}
          onClick={() => handleOffset(offset - limit)}
        >{`<`}</button>
        <span className={styles.pagination__pages}>
          {currentPage} of {totalPage}
        </span>
        <button
          type='button'
          className={styles.pagination__button}
          disabled={lastPage === offset}
          onClick={() => handleOffset(offset + limit)}
        >{`>`}</button>
        <button
          disabled={lastPage === offset}
          type='button'
          className={styles.pagination__button}
          onClick={() => handleOffset(lastPage)}
        >{`>>`}</button>
      </div>
    </div>
  );
};
