/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';

export const HCell = (str) => <th>{str}</th>;

export const SHCell = ({str, sort, callBack}) => {
  console.log(str, sort);

  const icon = !sort.inc && sort.key === str ? '˄' : '˅';
  console.log(icon)
  const action = {
    type: sort.inc ? 'decrement' : 'increment',
    key: str,
  };
  return (
    <th onClick={()=>callBack(action)}>
      <span>{str}</span>
      <span>{icon}</span>
    </th>
  );
};
