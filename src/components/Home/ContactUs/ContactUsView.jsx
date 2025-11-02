// eslint-disable-no-template-curly-in-string
import React from 'react';
import { Col, Row, Spin } from 'antd';
import { Form } from '../../Insurance';
import useForms from '../../../hooks/Forms/useForms';
import './styles.scss';

const ContactUsView = () => {
  const { saveForm, questions, loading } = useForms(1);
  return (
    <div className="contact-wrapper">
      <Row justify="center" gutter={[32, 32]}>
        {/* Contact Info */}
        <Col xs={24} md={10} lg={8}>
          <div className="contact-info">
            <div className="contact-header">
              <h2 className="contact-title">¿Listo para proteger a tu familia?</h2>
              <p className="contact-subtitle">
                Nuestros expertos están aquí para ayudarte a encontrar el seguro perfecto
              </p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-content">
                  <h4>Llámanos</h4>
                  <p>
                    <a href="tel:+528120351847">81 2035 1847</a>
                  </p>
                  <span>Lun - Vie: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">💬</div>
                <div className="method-content">
                  <h4>WhatsApp</h4>
                  <p>Respuesta inmediata</p>
                  <span>Disponible 24/7</span>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-content">
                  <h4>Visítanos</h4>
                  <p>Monterrey, Nuevo León</p>
                  <span>Corporativo Santa Engracia</span>
                </div>
              </div>
            </div>
            
            <div className="benefits-list">
              <h4>¿Por qué elegirnos?</h4>
              <ul>
                <li>✅ Más de 30 años de experiencia</li>
                <li>✅ Cotización gratuita y sin compromiso</li>
                <li>✅ Atención personalizada</li>
                <li>✅ Mejores precios del mercado</li>
              </ul>
            </div>
          </div>
        </Col>
        
        {/* Contact Form */}
        <Col xs={24} md={14} lg={12}>
          {loading ? (
            <div className="form-loader">
              <Spin size="large" />
              <p>Cargando formulario...</p>
            </div>
          ) : (
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Solicita tu cotización</h3>
                <p>Completa el formulario y te contactaremos en menos de 24 horas</p>
              </div>
              
              <div className="contact-form">
                <Form 
                  idSurvey={1} 
                  questions={questions} 
                  saveForm={saveForm} 
                  outlined={true} 
                  text="Solicitar cotización" 
                />
              </div>
              
              <div className="form-footer">
                <p className="privacy-note">
                  🔒 Tus datos están seguros. No compartimos tu información con terceros.
                </p>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ContactUsView;
