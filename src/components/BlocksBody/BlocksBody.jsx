/* eslint-disable react/prop-types */
import React from 'react';
import { useBlocksContext } from '../../context/blocksContext';
import { filtrListData } from '../../pages/Blocks/utils/filtrListData';
import { inTezosHandler } from '../../utils/inTezosHandler';
import { sortDataHandler } from '../../utils/sortDataHandler';
import { timeFormatHandler } from '../../utils/timeFormatHandler';
import { LBCell, ICellLinc } from '../Cell';

export const BlocksBody = ({ sort }) => {
  const { blocks } = useBlocksContext();
  const rows = filtrListData(blocks);
  const sortedRows = sort.key
    ? sortDataHandler(sort.key, rows, sort.inc)
    : rows;
  return (
    <>
      {sortedRows.map((row, rowIndex) => {
        const rowkey = `rowKey-${rowIndex}`;
        return (
          <tr key={rowkey}>
            <LBCell cell={row.blockId} />
            <td>{timeFormatHandler(row.created)}</td>
            <ICellLinc
              src={row.src}
              name={row.baker}
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
      })}
    </>
  );
};
