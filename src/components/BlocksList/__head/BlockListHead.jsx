import React from 'react';
import { HCell } from '../../Cell';
import { SHCell } from '../SHCell';

export const headCreator = (arr, sort, callback, sortKeys) =>
  arr.map((titleCell, i) => {
    const key = `${i}-${titleCell}`;
    if (sortKeys.find((sortKey) => sortKey === titleCell)) {
      return (
        <SHCell key={key} sort={sort} str={titleCell} callBack={callback} />
      );
    }
    return <HCell key={key} str={titleCell} />;
  });
