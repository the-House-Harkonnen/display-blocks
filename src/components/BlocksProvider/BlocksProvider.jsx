/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const BlocksContext = createContext();

export const BlocksProvider = ({ children }) => {
  const [limit, setLimit] = useState(10);
  const [blocks, setBlocks] = useState([]);
  const [offset, setOffset] = useState(0);

  const blocksContextValue = {
    blocks,
    limit,
  };

  useEffect(() => {
    console.log(limit, offset, blocks);
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
