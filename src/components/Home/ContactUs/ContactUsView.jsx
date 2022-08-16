// eslint-disable-no-template-curly-in-string
import React from 'react';
import { Col, Row, Spin } from 'antd';
import { Form } from '../../Insurance';
import useForms from '../../../hooks/Forms/useForms';
import './styles.scss';

const ContactUsView = () => {
  const { saveForm, questions, loading } = useForms(1);
  return (

    <Row className='container' justify='center'>
      {loading ?
        <div className='loader'>
          <Spin size="large" />
        </div>
        :
        <>
          <Col span={12}>
            <div className='CUcard'>
              <Row>
                <Col span={24}>
                  <h2 className='title'>Contactanos</h2>
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
        </>
      }
    </Row>
  );
};

export default ContactUsView;
