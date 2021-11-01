/* eslint-disable react/prop-types */
import React from 'react';

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
