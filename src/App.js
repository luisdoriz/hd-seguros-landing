import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
import Routes from './router';
import 'antd/dist/antd.min.css';

import logo from './assets/images/logo.png';

const App = () => {
  return (
    <BrowserRouter style={{ margin: '150px' }}>
      <div style={{ height: 100 }}>
        <div id="nav" className="nav">
          <Row align="middle" justify="space-between">
            <Col className="logoContainer" lg={4} md={6} sm={10} xs={18}>
              <NavLink exact="true" to="/">
                <img className="logoImg" src={logo} alt="logo" />
              </NavLink>
            </Col>
            <Col lg={14} md={12} sm={10} xs={4}>
              <Row justify="end">
                <a href="tel:+528120351847">Tel. 8120351847</a>
              </Row>
              <Row justify="end">
                <NavLink exact="true" to="/terms">
                  Términos y condiciones
                </NavLink>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <Routes />
      <Row
        justify="center"
        className="banner"
        align="middle"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col span={20}>
          <h3>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/sqiw3uLuL3CM4pNAA"
            >
              Direccion: Edificio A piso 5 Av. Ricardo Margain Zozaya 555,
              Corporativo Santa Engracia 1er Sector, 66273 Monterrey, N.L.
            </a>
          </h3>
        </Col>
      </Row>
      <a
        href="https://wa.me/5218120351847"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </BrowserRouter>
  );
};

export default App;
