/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { useBlocksContext } from '../../context/blocksContext';
import { filtrListData } from '../../pages/Blocks/utils/filtrListData';
import { CellSortOption, CellTh } from '../Cell';

export const BlocksHead = ({ sort, callback, sortKeys }) => {
  const { blocks } = useBlocksContext();
  const arr = Object.keys(filtrListData(blocks)[0]);
  return (
    <>
      {arr.map((titleCell, i) => {
        const key = `${i}-${titleCell}`;
        if (titleCell === 'src') return null;
        if (sortKeys.find((sortKey) => sortKey === titleCell)) {
          return (
            <CellSortOption
              key={key}
              sort={sort}
              str={titleCell}
              callBack={callback}
            />
          );
        }
        return <CellTh key={key} str={titleCell} />;
      })}
    </>
  );
};

BlocksHead.propTypes = {
  sort: PropTypes.shape({
    key: PropTypes.string.isRequired,
    inc: PropTypes.bool.isRequired,
  }).isRequired,
  callback: PropTypes.func.isRequired,
  sortKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
};
