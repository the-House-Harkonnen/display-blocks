/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlocksFromApi } from '../../api';

export const BlocksContext = createContext();

export const BlocksProvider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [blocks, setBlocks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const blocksContextValue = {
    blocks,
    limit,
    offset,
    totalCount,
    handleLimit: (val) => {
      setLimit(val);
      setOffset(0);
    },
    handleOffset: (val) => setOffset(val),
  };

  useEffect(async () => {
    const dataFromBlocksApi = await getBlocksFromApi(offset, limit);
    setBlocks(dataFromBlocksApi.blocks);
    setTotalCount(Number(dataFromBlocksApi.totalCount));
  }, [limit, offset]);
  return (
    <div>
      <BlocksContext.Provider value={blocksContextValue}>
        {children}
      </BlocksContext.Provider>
    </div>
  );
};

BlocksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
