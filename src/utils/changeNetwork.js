export const changeNetwork = (network) => {
  switch (network) {
    case 'mainnet':
      return 'https://api.teztracker.com/v2/data/tezos/mainnet';
    case 'testnet':
      return 'https://api.teztracker.com/v2/data/tezos/testnet';
    default:
      return 'https://api.teztracker.com/v2/data/tezos/mainnnet';
  }
};
