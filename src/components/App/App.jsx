import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HashRouter as Router } from 'react-router-dom';
import { BlocksProvider } from '../../contexts/blocksContext';
import { SingleBlocksProvider } from '../../contexts/singleBlockContext';
import { ThemeProvider } from '../../contexts/themeContext';
import Footer from '../Footer';
import Header from '../Header/Header';
import Main from '../Main';
import styles from './App.module.scss';
import { NetworkContextProvider } from '../../contexts/networkContext';

export const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <NetworkContextProvider>
          <ThemeProvider>
            <BlocksProvider>
              <SingleBlocksProvider>
                <Header />
                <Main />
                <Footer />
              </SingleBlocksProvider>
            </BlocksProvider>
            <ToastContainer />
          </ThemeProvider>
        </NetworkContextProvider>
      </Router>
    </div>
  );
};
