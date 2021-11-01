/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { sortKeys } from '../blocklistUtils/sortConfig';

export const HCell = ({ str }) => <th>{str}</th>;

export const SHCell = ({ str, sort, callBack }) => {
  const icon = !sort.inc && sort.key === str ? '˄' : '˅';
  const action = {
    type: sort.inc ? 'decrement' : 'increment',
    key: str,
  };
  return (
    <th onClick={() => callBack(action)}>
      <span>{str}</span>
      <span>{icon}</span>
    </th>
  );
};

export const headCreator = (arr, sort, callback) =>
  arr.map((titleCell, i) => {
    const key = `${i}-${titleCell}`;
    if (sortKeys.find((sortKey) => sortKey === titleCell)) {
      return (
        <SHCell key={key} sort={sort} str={titleCell} callBack={callback} />
      );
    }
    return <HCell key={key} str={titleCell} />;
  });

const LBCell = ({ cell }) => {
  console.log(cell);
  const history = useHistory();
  return (
    <td
      role='link'
      onClick={() => history.push(`/home/blocks/${cell}`)}
      onKeyPress={() => history.push(`/home/blocks/${cell}`)}
    >
      {cell}
    </td>
  );
};

export const rowCreator = (arr, keyLink) =>
  arr.map((cell, i) => {
    const key = `keycell-${i}-${cell[0]}-${cell[1]}`;
    if (cell[0] === keyLink) return <LBCell key={key} cell={cell[1]} />;
    return <td key={key}>{cell[1]}</td>;
  });
export const rowsCreator = (blocks) =>
  blocks.map((row, i) => {
    const key = `rowkey-${i}`;
    return <tr key={key}>{rowCreator(row, 'blockId')}</tr>;
  });
