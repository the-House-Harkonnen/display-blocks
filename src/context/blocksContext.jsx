import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlocks } from '../api';

const BlocksContext = createContext();
export const useBlocksContext = () => useContext(BlocksContext);

export const BlocksProvider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [blocks, setBlocks] = useState([]);
  const [offset, setOffset] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  const blocksContextValue = {
    blocks,
    limit,
    offset,
    totalCount,
    isFetching,
    isError,
    handleLimit: (val) => {
      setLimit(val);
      setOffset(0);
    },
    handleOffset: (val) => setOffset(val),
  };

  useEffect(() => {
    const setData = async () => {
      setIsFetching(true);
      setIsError(false);
      try {
        const data = await getBlocks(offset, limit);
        setBlocks(data.blocks);
        setTotalCount(data.totalCount);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsFetching(false);
      }
    };
    setData();
  }, [limit, offset]);

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
