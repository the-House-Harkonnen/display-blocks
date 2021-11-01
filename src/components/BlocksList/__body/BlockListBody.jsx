/* eslint-disable prettier/prettier */
import React from 'react';
import {LBCell} from "../../Cell"


export const rowsCreator = (blocks, linkKeys) =>
  blocks.map((row, rowindex) => {
    const rowkey = `rowkey-${rowindex}`;
    return (
      <tr key={rowkey}>
        {row.map((cell,  cellindex)=>{
          const cellkey = `keycell-${cellindex}-${cell[0]}-${cell[1]}`;
          if (linkKeys.find((linkKey)=> linkKey === cell[0])) return <LBCell key={cellkey} cell={cell[1]}/>;
          return <td key={cellkey}>{cell[1]}</td>;
        })}
      </tr>
      
    );
  });

