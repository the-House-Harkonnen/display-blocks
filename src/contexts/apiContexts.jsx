/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

const APIService = axios.create();
APIService.interceptors.request.use(async (config) => {
  config.baseURL = changeNetwork(localStorage.getItem('network'));
  return config;
});

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

export const APIProvider = ({ children }) => {
  const [network, setNetwork] = useState(networkList[0].value);

  useEffect(() => {
    localStorage.setItem('network', network);
  }, [network]);

  const history = useHistory();

  const value = {
    API,
    network,
    networkList,
    handleNetwork: (option) => {
      history.push('/');
      setNetwork(option);
    },
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};
