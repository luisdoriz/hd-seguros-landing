// eslint-disable-no-template-curly-in-string
import React from 'react';
import { Col, Row, Spin } from 'antd';
import { Form } from '../../Insurance';
import useForms from '../../../hooks/Forms/useForms';
import './styles.scss';

const ContactUsView = () => {
  const { saveForm, questions, loading } = useForms(1);
  return (

    <Row className='container' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='center'>
      {loading ?
        <div className='loader'>
          <Spin size="large" />
        </div>
        :
        <Col xs={{ span: 20 }}
          sm={{ span: 18 }}
          md={{ span: 10 }}
          className="paddingB">
          <div className='CUcard'>
            <Row>
              <Col span={24} align="center">
                <h2 className='title'>Contáctanos</h2>
                <h3>¿Te quedó alguna duda? Llena este formulario y nos comunicaremos contigo pronto</h3>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Form idSurvey={1} questions={questions} saveForm={saveForm} outlined={false} text="Enviar" />
              </Col>
            </Row>
          </div>
        </Col>
      }
    </Row>
  );
};

export default ContactUsView;
