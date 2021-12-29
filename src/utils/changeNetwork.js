/* eslint-disable no-console */
export const changeNetwork = (network) => {
  console.log(network);
  switch (network) {
    case 'mainnet':
      return 'https://api.teztracker.com/v2/data/tezos/mainnet';
    case 'testnet':
      return 'http://151.115.59.252:1323/api/v1/';
    default:
      return 'https://api.teztracker.com/v2/data/tezos/mainnnet';
  }
};
