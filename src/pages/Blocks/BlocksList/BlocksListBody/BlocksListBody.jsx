import React from 'react';
import { inTezosHandler } from '../../../../utils/inTezosHandler';
import { timeFormatHandler } from '../../../../utils/timeFormatHandler';
import { LBCell, ICellLinc } from '../../../../components/Cell';

export const BlocksListBody = (blocks) =>
  blocks.map((row, rowindex) => {
    const rowkey = `rowkey-${rowindex}`;
    return (
      <tr key={rowkey}>
        <LBCell cell={row.blockId} />
        <td>{timeFormatHandler(row.created)}</td>
        <ICellLinc
          src={row.src}
          name={row.backer}
          alt={row.backer}
          href={row.blockId}
        />
        <td>{row.Priority}</td>
        <td>{row['# of operations']}</td>
        <td>{`${inTezosHandler(row.volume)} `}&#42793;</td>
        <td>{`${inTezosHandler(row.fees)} `}&#42793;</td>
        <td>{row.endorsements}</td>
      </tr>
    );
  });
