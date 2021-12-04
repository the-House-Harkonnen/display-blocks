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
import { NetworkProvider } from '../../contexts/networkContext';
import { APIProvider } from '../../contexts/apiContexts';

export const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <ThemeProvider>
          <APIProvider>
            <NetworkProvider>
              <BlocksProvider>
                <SingleBlocksProvider>
                  <Header />
                  <Main />
                  <Footer />
                </SingleBlocksProvider>
              </BlocksProvider>
            </NetworkProvider>
            <ToastContainer />
          </APIProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
};
