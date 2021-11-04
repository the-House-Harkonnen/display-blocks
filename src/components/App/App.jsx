import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { BlocksProvider } from '../BlocksProvider';
import Footer from '../Footer';
import Header from '../Header/Header';
import Main from '../Main';
import styles from './App.module.scss';

export const App = () => (
  <div className={styles.app}>
    <Router>
      <BlocksProvider>
        <Header />
        <Main />
        <Footer />
      </BlocksProvider>
    </Router>
  </div>
);
