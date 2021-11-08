/* eslint-disable react/prop-types */
import React from 'react';
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
