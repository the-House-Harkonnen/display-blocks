import React from 'react';
import { LBCell, ICell } from '../../Cell';

export const BlocksListBody = (blocks) =>
  blocks.map((row, rowindex) => {
    const rowkey = `rowkey-${rowindex}`;
    return (
      <tr key={rowkey}>
        <LBCell cell={row.blockId} />
        <td>{row.created}</td>
        <ICell src={row.src} name={row.backer} alt={row.backer} />
        <td>{row.Priority}</td>
        <td>{row['# of operations']}</td>
        <td>{row.volume}</td>
        <td>{row.fees}</td>
        <td>{row.endorsements}</td>
      </tr>
    );
  });
