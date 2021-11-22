import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getBlock } from '../api';
import { useRequest } from '../hooks/useRequest';

const SingleBlockContext = createContext();
export const useSingleBlockContext = () => useContext(SingleBlockContext);

export const SingleBlocksProvider = ({ children }) => {
  const [id, setId] = useState(119211);
  const [data, loading, error] = useRequest(getBlock, [id], [id]);
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
