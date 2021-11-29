/* eslint-disable no-console */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { getBlocks } from '../api';
import { useRequest } from '../hooks/useRequest';
import { useNetworkContext } from './networkContext';

const BlocksContext = createContext();
export const useBlocksContext = () => useContext(BlocksContext);

export const BlocksProvider = ({ children }) => {
  const { network } = useNetworkContext();
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const [data, loading, error] = useRequest(
    getBlocks,
    [offset, limit, network],
    [offset, limit, network],
  );

  const handleLimit = useCallback(
    (val) => {
      setLimit(Number(val));
      setOffset(0);
    },
    [setLimit, setOffset],
  );
  const handleOffset = useCallback(
    (val) => {
      setOffset(val);
    },
    [setOffset],
  );

  const blocksContextValue = useMemo(
    () => ({
      blocks: data?.blocks,
      limit,
      offset,
      totalCount: data?.totalCount,
      isFetching: loading,
      isError: error,
      handleLimit,
      handleOffset,
    }),
    [data, error, limit, offset, loading],
  );

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
