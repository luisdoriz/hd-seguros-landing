import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import Routes from './router';
import 'antd/dist/antd.min.css';

const App = () => {
  return (
    <HashRouter>
      <div id="nav">
        <NavLink exact="true" to="/">
          Home
        </NavLink>{' '}
        |{' '}
        <NavLink exact="true" to="/about">
          About
        </NavLink>
      </div>
      <Routes />
    </HashRouter>
  );
};

export default App;
