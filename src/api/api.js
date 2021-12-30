/* eslint-disable no-debugger */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { changeNetwork } from '../utils/changeNetwork';

const APIService = axios.create();
// APIService.interceptors

APIService.interceptors.request.use((config) => {
  config.baseURL = changeNetwork(localStorage.getItem('network'));
  return config;
});

export const API = {
  getBlocks: async (offset = 0, limit = 10) => {
    const response = await APIService.get(
      `/blocks?offset=${offset}&limit=${limit}`,
      {},
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
