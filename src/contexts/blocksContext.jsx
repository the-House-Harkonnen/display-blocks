/* eslint-disable no-console */
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
      blocks,
      limit,
      offset,
      totalCount,
      isFetching,
      isError,
      handleLimit,
      handleOffset,
    }),
    [blocks, isError, limit, offset, isFetching],
  );

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
