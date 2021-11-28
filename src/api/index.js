import axios from 'axios';

const NETWORK = 'mainnet';

const instance = axios.create({
  baseURL: 'https://api.teztracker.com/v2/data/tezos',
});

export const getBlocks = async (offset = 0, limit = 10, network) => {
  const response = await instance.get(
    `/${network}/blocks?offset=${offset}&limit=${limit}`,
  );
  return {
    blocks: response.data,
    totalCount: response.headers['x-total-count'],
  };
};

export const getBlock = async (hash) => {
  const response = await instance.get(`/${NETWORK}/blocks/${hash}`);
  return response.data.block;
};
