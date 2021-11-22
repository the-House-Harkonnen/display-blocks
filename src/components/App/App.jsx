import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { HashRouter as Router } from 'react-router-dom';
import { BlocksProvider } from '../../contexts/blocksContext';
import { SingleBlocksProvider } from '../../contexts/singleBlockContext';
import Footer from '../Footer';
import Header from '../Header/Header';
import Main from '../Main';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <Router>
      <BlocksProvider>
        <SingleBlocksProvider>
          <Header />
          <Main />
          <Footer />
        </SingleBlocksProvider>
      </BlocksProvider>
      <ToastContainer />
    </Router>
  </div>
);
