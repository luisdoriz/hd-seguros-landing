import React, { useEffect, useState } from 'react';
import { Row, Col, Spin, Button } from 'antd';
import { useParams } from 'react-router-dom';
import useForms from '../hooks/Forms/useForms';
import { Form } from '../components/Insurance';

import data from '../assets/texts/insurances.json';
import './Insurance.scss';

/**
 * Insurance detail page component
 * Displays detailed information about a specific insurance product with a quote form
 */
const Insurance = () => {
  const { type } = useParams();
  const info = data.find((insurance) => insurance.tag === type);
  const id = info.id;
  const { form, saveForm, questions, loading } = useForms(id);
  const insuranceType = form?.QuoteType;
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for sticky form animation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Highlights specific words in a string
   * @param {string} text - The text to process
   * @param {string[]} highlightWords - Words to highlight
   */
  const renderHighlightedText = (text, highlightWords = ['familia', 'futuro', 'Seguro', 'Ventajas']) => {
    return text.split(' ').map((word, i) => {
      const isHighlighted = highlightWords.some(hw => word.includes(hw));
      return isHighlighted ? (
        <span className="accent" key={i}>
          {word.concat(' ')}
        </span>
      ) : (
        <span key={i}>{word.concat(' ')}</span>
      );
    });
  };

  /**
   * Renders promotional text with line breaks
   */
  const renderPromotionalText = (text) => {
    return text.split(' ').map((word, i) => {
      return word === 'br' ? <br key={i} /> : word.concat(' ');
    });
  };

  /**
   * Get insurance-specific benefits
   */
  const getInsuranceBenefits = () => {
    const benefitsMap = {
      medical: [
        { icon: '🏥', title: 'Mejores Hospitales', desc: 'Red de hospitales privados de primera clase' },
        { icon: '💰', title: 'Sin Límite de Edad', desc: 'Protección para toda tu familia' },
        { icon: '⚡', title: 'Respuesta Rápida', desc: 'Autorización en menos de 24 horas' },
        { icon: '🛡️', title: 'Cobertura Amplia', desc: 'Desde consultas hasta cirugías mayores' }
      ],
      educational: [
        { icon: '🎓', title: 'Educación Garantizada', desc: 'Asegura el futuro académico de tus hijos' },
        { icon: '💎', title: 'Ahorro Protegido', desc: 'Tu inversión crece con el tiempo' },
        { icon: '🔒', title: 'Protección Familiar', desc: 'Cobertura por invalidez o fallecimiento' },
        { icon: '📈', title: 'Actualización', desc: 'Mantén el poder adquisitivo con inflación' }
      ],
      maternity: [
        { icon: '👶', title: 'Parto y Cesárea', desc: 'Cobertura completa del nacimiento' },
        { icon: '🏥', title: 'Complicaciones', desc: 'Protección ante cualquier eventualidad' },
        { icon: '💝', title: 'Recién Nacido', desc: 'Cuidado inmediato para tu bebé' },
        { icon: '⏰', title: '10 Meses', desc: 'Antigüedad mínima requerida' }
      ],
      travel: [
        { icon: '✈️', title: 'Cobertura Mundial', desc: 'Protección en cualquier país' },
        { icon: '📞', title: 'Asistencia 24/7', desc: 'Apoyo en tu idioma todo el tiempo' },
        { icon: '🏥', title: 'Emergencias', desc: 'Atención médica inmediata' },
        { icon: '📋', title: 'Documentos', desc: 'Ayuda en pérdida de pasaporte' }
      ],
      car: [
        { icon: '🚗', title: 'Responsabilidad Civil', desc: 'Protección ante daños a terceros' },
        { icon: '🔧', title: 'Asistencia Vial', desc: 'Grúa y reparaciones de emergencia' },
        { icon: '🛡️', title: 'Robo Total', desc: 'Cobertura completa ante robo' },
        { icon: '💰', title: 'Deducibles Bajos', desc: 'Elige el plan perfecto para ti' }
      ]
    };
    return benefitsMap[type] || benefitsMap.medical;
  };

  if (loading) {
    return (
      <div className="insurance-page">
        <div className="loader-container">
          <Spin size="large" />
          <p className="loader-text">Cargando información...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="insurance-page">
      {/* Hero Section */}
      <section className="insurance-hero">
        <div className="insurance-hero-background">
          <div className="insurance-hero-overlay"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="insurance-hero-content">
          <Row justify="center" gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}>
            <Col xs={22} sm={20} md={20} lg={18} xl={16}>
              <Row gutter={{ xs: 16, sm: 24, md: 32 }} align="middle">
                {/* Content Column */}
                <Col xs={24} lg={14}>
                  <div className="insurance-hero-text">
                    <div className="insurance-badge">
                      <span className="badge-icon">✨</span>
                      <span>{info.subtitle[0]}</span>
                    </div>

                    <h1 className="insurance-hero-title">
                      {renderHighlightedText(info.title[0])}
                    </h1>

                    <h2 className="insurance-hero-subtitle">
                      {renderHighlightedText(info.subtitle[1])}
                    </h2>

                    <p className="insurance-hero-description">
                      {renderPromotionalText(info.promotional[0])}
                    </p>

                    <div className="insurance-hero-actions">
                      <Button
                        type="primary"
                        shape="round"
                        size="large"
                        className="btn-quote"
                        onClick={() => {
                          document.querySelector('.insurance-form-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Solicitar Cotización
                      </Button>
                      <Button
                        shape="round"
                        size="large"
                        className="btn-call"
                        href="tel:+528120351847"
                      >
                        📞 Llamar Ahora
                      </Button>
                    </div>

                    <div className="trust-indicators">
                      <div className="trust-item">
                        <span className="trust-icon">✅</span>
                        <span>Cotización Gratuita</span>
                      </div>
                      <div className="trust-item">
                        <span className="trust-icon">⚡</span>
                        <span>Respuesta en 24hrs</span>
                      </div>
                      <div className="trust-item">
                        <span className="trust-icon">🏆</span>
                        <span>30+ Años Exp.</span>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Image Column */}
                <Col xs={24} lg={10}>
                  <div className="insurance-hero-image">
                    <div className="image-wrapper">
                      <img
                        src={require(`../assets/images/${type}.png`)}
                        alt={insuranceType?.name || info.name}
                        className="insurance-image"
                      />
                      <div className="image-decoration"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="insurance-benefits">
        <Row justify="center">
          <Col xs={22} sm={20} md={20} lg={18} xl={16}>
            <div className="section-header">
              <h2 className="section-title">¿Por qué elegir este seguro?</h2>
              <div className="title-underline"></div>
            </div>

            <div className="benefits-grid">
              {getInsuranceBenefits().map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </section>

      {/* Form Section */}
      <section className="insurance-form-section">
        <Row justify="center" gutter={{ xs: 16, sm: 24, md: 32, lg: 40 }}>
          <Col xs={22} sm={20} md={20} lg={18} xl={16}>
            <Row gutter={{ xs: 16, sm: 24, md: 32 }} align="top">
              {/* Details Column */}
              <Col xs={24} lg={14}>
                <div className="insurance-details">
                  <h2 className="details-title">
                    {renderHighlightedText(info.title[1])}
                  </h2>

                  <h3 className="details-subtitle">
                    {renderHighlightedText(info.subtitle[2])}
                  </h3>

                  <div className="details-content">
                    <p className="details-text">
                      {renderPromotionalText(info.promotional[1])}
                    </p>
                  </div>

                  <div className="details-features">
                    <div className="feature-highlight">
                      <span className="feature-icon">🎯</span>
                      <div>
                        <h4>Asesoría Personalizada</h4>
                        <p>Te ayudamos a encontrar la mejor opción para ti</p>
                      </div>
                    </div>
                    <div className="feature-highlight">
                      <span className="feature-icon">💼</span>
                      <div>
                        <h4>Experiencia Comprobada</h4>
                        <p>Más de 30 años protegiendo familias mexicanas</p>
                      </div>
                    </div>
                    <div className="feature-highlight">
                      <span className="feature-icon">🔒</span>
                      <div>
                        <h4>Seguridad Garantizada</h4>
                        <p>Respaldados por las mejores aseguradoras</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Form Column */}
              <Col xs={24} lg={10}>
                <div className={`insurance-form-wrapper ${scrolled ? 'scrolled' : ''}`}>
                  <div className="form-card">
                    <div className="form-header">
                      <h3 className="form-title">Solicita tu Cotización</h3>
                      <p className="form-subtitle">
                        Completa el formulario y recibe una respuesta en menos de 24 horas
                      </p>
                    </div>
                    <Form
                      idSurvey={id}
                      questions={questions}
                      saveForm={saveForm}
                      outlined={false}
                      text="SOLICITAR COTIZACIÓN"
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>

      {/* CTA Section */}
      <section className="insurance-cta">
        <Row justify="center">
          <Col xs={22} sm={20} md={18} lg={14}>
            <div className="cta-content">
              <div className="cta-icon">💬</div>
              <h2 className="cta-title">¿Tienes dudas?</h2>
              <p className="cta-text">
                Nuestros asesores están listos para ayudarte a encontrar
                el seguro perfecto para ti y tu familia
              </p>
              <div className="cta-actions">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  href="tel:+528120351847"
                  className="cta-button"
                >
                  📞 Llamar al 81 2035 1847
                </Button>
                <Button
                  shape="round"
                  size="large"
                  href="https://api.whatsapp.com/send/?phone=5218120351847&text&type=phone_number&app_absent=0&text=%C2%A1Hola!%20%20mi%20nombre%20es:%0ADeseo%20cotizar%20seguro%20de:"
                  target="_blank"
                  className="cta-button-secondary"
                >
                  💬 Escribir por WhatsApp
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Insurance;
