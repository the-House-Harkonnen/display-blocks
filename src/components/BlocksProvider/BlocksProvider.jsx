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

  useEffect(() => {
    setBlocks([]);
  }, [limit, offset]);

  useEffect(async () => {
    const dataFromBlocksApi = await getBlocksFromApi(offset, limit);
    setBlocks((prev) => {
      if (!blocks.length) return dataFromBlocksApi.blocks;
      return prev;
    });
    setTotalCount((prev) => {
      if (!blocks.length) return Number(dataFromBlocksApi.totalCount);
      return prev;
    });
  }, [blocks]);

  return (
    <>
      <BlocksContext.Provider value={blocksContextValue}>
        {children}
      </BlocksContext.Provider>
    </>
  );
};

BlocksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
