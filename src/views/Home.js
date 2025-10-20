import { Row, Col, Button } from 'antd';
import React, { useRef } from 'react';
import YouTube from 'react-youtube';

import { ContactUs, ProductList } from '../components/Home';
import data from '../assets/texts/general.json';

import doctorImg from '../assets/images/doctor.png';

const getText = () =>
  data.title.split(' ').map((word, i) => {
    return word === 'Asegura' ? (
      <span className="accent" key={i}>
        {word.concat(' ')}
      </span>
    ) : (
      <span key={i}>{word.concat(' ')}</span>
    );
  });

const Home = () => {
  const productsRef = useRef(null);
  const handleClick = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <Row
          justify="center"
          align="middle"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className="hero-content"
        >
          <Col
            xs={{ order: 2, span: 22 }}
            sm={{ order: 2, span: 20 }}
            md={{ order: 1, span: 11 }}
            lg={{ order: 1, span: 10 }}
          >
            <div className="hero-text">
              <div className="hero-badge">
                <span>🛡️ Más de 30 años de experiencia</span>
              </div>
              <h1 className="hero-title">{getText()}</h1>
              <h2 className="hero-subtitle">{data.subtitle[0]}</h2>
              <p className="hero-description">{data.pitch[0]}</p>
              <div className="hero-actions">
                <Button
                  onClick={handleClick}
                  className="hero-cta-primary"
                  type="primary"
                  shape="round"
                  size="large"
                >
                  Ver productos
                </Button>
                <Button
                  className="hero-cta-secondary"
                  shape="round"
                  size="large"
                  href="tel:+528120351847"
                >
                  📞 Llamar ahora
                </Button>
              </div>
              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">✅</span>
                  <span>Cotización gratuita</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span>Respuesta inmediata</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏥</span>
                  <span>Mejores hospitales</span>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={{ order: 1, span: 22 }}
            sm={{ order: 1, span: 20 }}
            md={{ order: 2, span: 11 }}
            lg={{ order: 2, span: 10 }}
            className="hero-image-col"
          >
            <div className="hero-image-container">
              <img className="hero-image" src={doctorImg} alt="doctor" />
              <div className="floating-card">
                <div className="floating-card-content">
                  <span className="floating-icon">💼</span>
                  <div>
                    <strong>Despacho Profesional</strong>
                    <p>Monterrey, N.L.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* Video Section */}
      <section className="video-section">
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={22} sm={20} md={18} lg={16}>
            <div className="video-container">
              <div className="video-header">
                <h2>Conoce más sobre nosotros</h2>
                <p>Descubre por qué somos la mejor opción para proteger a tu familia</p>
              </div>
              <div className="video-wrapper">
                <YouTube videoId={'lFhUQygRXQA'} className="youtube-player" />
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={22} sm={20} md={18} lg={16}>
            <div className="features-content">
              <div className="section-header">
                <h2 className="section-title">¿Por qué elegirnos?</h2>
                <p className="section-subtitle">
                  Más de 30 años protegiendo a las familias mexicanas con los mejores seguros
                </p>
                <div className="title-underline"></div>
              </div>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🎯</span>
                  </div>
                  <h3 className="feature-title">Asesoría Personalizada</h3>
                  <p className="feature-description">
                    Expertos dedicados que te guían para encontrar el seguro perfecto para ti y tu familia
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">💰</span>
                  </div>
                  <h3 className="feature-title">Mejores Precios</h3>
                  <p className="feature-description">
                    Comparamos múltiples aseguradoras para ofrecerte las tarifas más competitivas del mercado
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">⚡</span>
                  </div>
                  <h3 className="feature-title">Respuesta Inmediata</h3>
                  <p className="feature-description">
                    Cotización en menos de 24 horas y atención rápida cuando más lo necesitas
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🏥</span>
                  </div>
                  <h3 className="feature-title">Red de Hospitales</h3>
                  <p className="feature-description">
                    Acceso a los mejores hospitales y clínicas privadas en todo México
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">📞</span>
                  </div>
                  <h3 className="feature-title">Atención 24/7</h3>
                  <p className="feature-description">
                    Soporte continuo para emergencias y consultas en cualquier momento del día
                  </p>
                </div>

                <div className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="feature-icon">🔒</span>
                  </div>
                  <h3 className="feature-title">Confianza y Seguridad</h3>
                  <p className="feature-description">
                    Más de 30 años de experiencia respaldando a miles de familias mexicanas
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* About Section */}
      <section className="about-section">
        <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col xs={22} sm={20} md={18} lg={16}>
            <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">
                  {data.subtitle[1].split(' ').map((word, i) => {
                    return word === 'Seguro' ? (
                      <span className="accent" key={i}>
                        {word.concat(' ')}
                      </span>
                    ) : (
                      <span key={i}>{word.concat(' ')}</span>
                    );
                  })}
                </h2>
                <div className="title-underline"></div>
              </div>
              
              <div className="about-grid">
                <div className="about-text">
                  <h3 className="about-subtitle">
                    {data.pitch[1].split(' ').map((word, i) => {
                      return word === 'br' ? <br key={i} /> : word.concat(' ');
                    })}
                  </h3>
                  <p className="about-description">{data.text[0]}</p>
                </div>
                
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Años de experiencia</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Familias protegidas</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">24/7</div>
                    <div className="stat-label">Atención disponible</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">5★</div>
                    <div className="stat-label">Calificación promedio</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
      {/* Products Section */}
      <section className="products-section" ref={productsRef}>
        <Row justify="center">
          <Col xs={22} sm={20} md={20} lg={20} xl={18}>
            <div className="section-header">
              <h2 className="section-title">Nuestros Productos</h2>
              <p className="section-subtitle">Encuentra el seguro perfecto para ti y tu familia</p>
              <div className="title-underline"></div>
            </div>
          </Col>
        </Row>
        <div className="products-container">
          <ProductList />
        </div>
      </section>
      {/* Contact Section */}
      <section className="contact-section">
        <ContactUs />
      </section>
    </div>
  );
};

export default Home;
