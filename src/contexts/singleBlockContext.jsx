import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useRequest } from '../hooks/useRequest';
import { API } from '../api/api';

const SingleBlockContext = createContext();
export const useSingleBlockContext = () => {
  const ctx = useContext(SingleBlockContext);
  if (!ctx) {
    throw new Error(
      'you are not into Provider of the contexts, make sure the component wrapped in the Provider',
    );
  }

  return ctx;
};

export const SingleBlocksProvider = ({ children }) => {
  const [id, setId] = useState(119211);
  const [data, loading, error] = useRequest(API.getBlock, [id], [id]);
  const value = useMemo(
    () => ({
      setBlock: (val) => setId(val),
      isFetching: loading,
      isError: error,
      block: data,
      blockId: id,
    }),
    [error, data, loading],
  );

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
