import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
import Routes from './router';
import 'antd/dist/antd.min.css';

import logo from './assets/images/logo.png';

const App = () => {
  return (
    <BrowserRouter style={{ margin: '150px' }}>
      <div style={{height: 100}}>
      <div id="nav" className="nav">
        <Row align="middle">
          <Col className="logoContainer" span={4}>
            <NavLink exact="true" to="/">
              <img className="logoImg" src={logo} alt="logo" />
            </NavLink>
          </Col>
          <Col span={6} offset={14}>
            {/* <NavLink style={{ fontSize: '15.5px' }} exact="true" to="/">
              Inicio
            </NavLink>{' '} */}
            {/* |{' '} */}
            <NavLink style={{ fontSize: '15.5px' }} exact="true" to="/terms">
              Términos y condiciones
            </NavLink>
          </Col>
        </Row>
      </div>
      </div>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
