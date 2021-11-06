import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlock } from '../api';

const SingleBlockContext = createContext();
export const useSingleBlockContext = () => useContext(SingleBlockContext);

export const SingleBlocksProvider = ({ children }) => {
  const [blockId, setBlockId] = useState(null);
  const [block, setBlock] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchBlock = async (nevBlockId) => {
    setIsFetching(true);
    setIsError(false);
    try {
      const data = await getBlock(nevBlockId);
      setBlock(data.block);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsFetching(false);
    }
  };

  const value = {
    setBlockId,
    setBlock: (val) => fetchBlock(val),
    isFetching,
    isError,
    block,
    blockId,
  };

  return (
    <>
      <SingleBlockContext.Provider value={value}>
        {children}
      </SingleBlockContext.Provider>
    </>
  );
};

SingleBlocksProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
