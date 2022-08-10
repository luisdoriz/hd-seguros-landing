import React from 'react';
import { Col, Row, Input, Form, Button } from 'antd';
import './styles.scss';

const { TextArea } = Input;

const ContactUsView = () => {
  const onFinish = () =>{
    
  }
  const onFinishFailed = () =>{
    
  }
  const validateMessages = {
    // eslint-disable-next-line
    required: '¡${label} es requerido!',
    pattern: '${label} no tiene el formato correcto.',
    types: {
      email: '¡No es un correo válido!',
    },
  };
  return (
    <Row className='container'>
      <Col span={24}>
        <div className='CUcard'>
          <Row>
            <Col span={24}>
              <h2 className='title'>Contactanos</h2>
              <h3>¿Te quedó alguna duda? Llena este formulario y nos comunicaremos contigo pronto</h3>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={validateMessages}
                autoComplete="off"
              >
                <Form.Item
                  label="Nombre"
                  name="name"
                  rules={[{ required: true}]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Correo"
                  name="email"
                  rules={[{ type: 'email',required: true}]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Comentario"
                  name="comment"
                  rules={[{ required: true}]}
                >
                  <TextArea />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit">
                    Enviar
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default ContactUsView;
