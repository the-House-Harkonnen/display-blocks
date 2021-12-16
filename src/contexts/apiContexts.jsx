/* eslint-disable no-debugger */
import axios from 'axios';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { networkList } from '../constants';
import { changeNetwork } from '../utils/changeNetwork';

const APIContext = createContext();
export const useApiContext = () => {
  const ctx = useContext(APIContext);
  if (!ctx) {
    throw new Error(
      'you are not into Provider of the contexts, make sure the component wrapped in the Provider',
    );
  }

  return ctx;
};

export const APIProvider = ({ children }) => {
  const [network, setNetwork] = useState(networkList[0].value);

  const APIService = useMemo(
    () =>
      axios.create({
        baseURL: changeNetwork(network),
      }),
    [network],
  );

  const API = {
    getBlocks: async (offset = 0, limit = 10) => {
      const response = await APIService.get(
        `/blocks?offset=${offset}&limit=${limit}`,
      );
      return {
        blocks: response.data,
        totalCount: response.headers['x-total-count'],
      };
    },
    getBlock: async (hash) => {
      const response = await APIService.get(`/blocks/${hash}`);
      return response.data.block;
    },
  };

  const history = useHistory();
  const handleNetwork = useCallback(
    (option) => {
      history.push('/');
      setNetwork(option);
    },
    [network],
  );

  const value = useMemo(
    () => ({
      API,
      network,
      networkList,
      handleNetwork,
    }),
    [network],
  );

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};

APIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
