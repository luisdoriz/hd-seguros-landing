import React from 'react';
import { HashRouter, NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
import Routes from './router';
import 'antd/dist/antd.min.css';

import logo from './assets/images/logo.jpeg';

const App = () => {
  return (
    <HashRouter>
      <div id="nav" className='nav'>
        <Row align='middle'>
          <Col className='logoContainer' span={4}>
            <img className="logoImg" src={logo} alt="logo" />
          </Col>
          <Col span ={6} offset={14}>
            <NavLink exact="true" to="/">
              Inicio
            </NavLink>
            {' '}
            |{' '}
            <NavLink exact="true" to="/terms">
              Términos y condiciones
            </NavLink>
          </Col>
        </Row>
      </div>
      <Routes />
    </HashRouter>
  );
};

export default App;
