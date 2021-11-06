import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { BlocksProvider } from '../../context/blocksContext';
import { SingleBlocksProvider } from '../../context/singleBlockContext';
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
    </Router>
  </div>
);
