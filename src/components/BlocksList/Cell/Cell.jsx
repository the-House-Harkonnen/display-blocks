/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-debugger */
/* eslint-disable no-console */
import React from 'react';
import { sortKeys } from '../blocklistUtils/sortConfig';

export const HCell = ({str}) => <th>{str}</th>;

export const SHCell = ({str, sort, callBack}) => {

  const icon = !sort.inc && sort.key === str ? '˄' : '˅';
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

export const headCreator = (arr, sort, callback)=> arr.map((titleCell,i)=>{

    const key = `${i}-${titleCell}`
    if(sortKeys.find(sortKey=> sortKey === titleCell)){
        console.log(titleCell)
        return <SHCell key={key} sort={sort} str={titleCell} callBack={callback} />
    }
    return <HCell str={titleCell}/>

})