/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { networkList } from '../constants';

const APIContext = createContext();
export const useApiContext = () => useContext(APIContext);

const APIService = axios.create();
APIService.interceptors.request.use((config) => {
  config.baseURL = `https://api.teztracker.com/v2/data/tezos/${localStorage.getItem(
    'network',
  )}`;
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

  const value = {
    API,
    network,
    networkList,
    handleNetwork: (option) => {
      debugger;
      console.log(option);
      setNetwork(option);
    },
  };

  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};
