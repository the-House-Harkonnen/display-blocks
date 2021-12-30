/* eslint-disable no-console */
/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

const networkContext = createContext();
export const useNetworkContext = () => {
  const ctx = useContext(networkContext);
  if (!ctx) {
    throw new Error(
      'you are not into Provider of the contexts, make sure the component wrapped in the Provider',
    );
  }

  return ctx;
};

export const NetworkContextProvider = ({ children }) => {
  const [network, setNetwork] = useState('mainnet');
  const history = useHistory();
  useEffect(() => {
    localStorage.setItem('network', network);
  }, [network]);
  const handleNetwork = (value) => {
    console.log(value);
    history.push('/');
    setNetwork(value);
  };
  const value = useMemo(
    () => ({
      network,
      networkOptions: ['mainnet', 'testnet'],
      handleNetwork,
    }),
    [network],
  );

  return (
    <networkContext.Provider value={value}>{children}</networkContext.Provider>
  );
};
