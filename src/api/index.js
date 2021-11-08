import axios from 'axios';

const NETWORK = 'mainnet';

const blocksInstance = axios.create({
  baseURL: 'https://api.teztracker.com/v2/data/tezos',
});

export const getBlocks = async (offset = 0, limit = 10) => {
  return blocksInstance
    .get(`/${NETWORK}/blocks?offset=${offset}&limit=${limit}`)
    .then((response) => {
      return {
        blocks: response.data,
        totalCount: response.headers['x-total-count'],
      };
    });
};

export const getBlock = async (hash) => {
  return blocksInstance
    .get(`/${NETWORK}/blocks/${hash}`)
    .then((response) => response.data);
};
