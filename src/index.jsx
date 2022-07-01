import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import './styles.css';

import GlobalStyle from './style';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Body />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
