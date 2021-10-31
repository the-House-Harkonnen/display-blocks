import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header/Header';
import Main from '../Main';

export const App = () => (
  <div>
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </div>
);
