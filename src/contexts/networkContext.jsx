/* eslint-disable react/prop-types */
import React, { createContext, useContext, useMemo, useState } from 'react';

const NetworkContext = createContext();
export const useNetworkContext = () => useContext(NetworkContext);

const networkOptions = ['mainnet', 'otherOption'];
export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState(networkOptions[0]);

  const value = useMemo(() => ({
    networkOptions,
    network,
    handleNetwork: (option) => setNetwork(option),
  }));

  return (
    <NetworkContext.Provider value={value}>{children}</NetworkContext.Provider>
  );
};
