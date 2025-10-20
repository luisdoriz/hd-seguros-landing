import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Col, Row } from 'antd';
import Routes from './router';
import 'antd/dist/antd.min.css';

import logo from './assets/images/logo.png';

const App = () => {
  return (
    <BrowserRouter style={{ margin: '150px' }}>
      <nav id="nav" className="nav">
        <div className="nav-container">
          <Row align="middle" justify="space-between" gutter={[16, 8]}>
            <Col className="logoContainer" lg={4} md={6} sm={12} xs={16}>
              <NavLink exact="true" to="/" className="logo-link">
                <img className="logoImg" src={logo} alt="HD Seguros Logo" />
              </NavLink>
            </Col>
            <Col className="nav-links-container" lg={16} md={14} sm={12} xs={8}>
              <div className="nav-links">
                <a href="tel:+528120351847" className="nav-phone">
                  <span className="phone-icon">📞</span>
                  <span className="phone-number">81 2035 1847</span>
                </a>
                <NavLink exact="true" to="/terms" className="nav-terms">
                  Términos y condiciones
                </NavLink>
              </div>
            </Col>
          </Row>
        </div>
      </nav>
      <div className="nav-spacer"></div>
      <Routes />
      <footer className="main-footer">
        <Row justify="center" align="middle" gutter={[24, 24]}>
          <Col xs={24} md={16} lg={12}>
            <div className="footer-content">
              <div className="footer-icon">📍</div>
              <div className="footer-text">
                <h4>Visítanos en nuestra oficina</h4>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://goo.gl/maps/sqiw3uLuL3CM4pNAA"
                  >
                    Edificio A piso 5, Av. Ricardo Margain Zozaya 555,
                    Corporativo Santa Engracia 1er Sector, 66273 Monterrey, N.L.
                  </a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </footer>
      <a
        href="https://api.whatsapp.com/send/?phone=5218120351847&text&type=phone_number&app_absent=0&text=%C2%A1Hola!%20%20mi%20nombre%20es:%0ADeseo%20cotizar%20seguro%20de:"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
        text=""
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </BrowserRouter>
  );
};

export default App;
