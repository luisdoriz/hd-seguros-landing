// eslint-disable-no-template-curly-in-string
import React from 'react';
import { Col, Row, Input, InputNumber, Select, Form, Button } from 'antd';

const { Option } = Select;

const FormView = ({ questions, saveForm }) => {
    const onFinish = () => {

    }
    const onFinishFailed = () => {

    }
    const validateMessages = {
        
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
                            <Form
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                validateMessages={validateMessages}
                                autoComplete="off"
                            >
                                {
                                    questions.map(question => {
                                        return (
                                            <Form.Item
                                                label={question.sentence}
                                                name={question.sentence}
                                                rules={[{ required: true }]}
                                            >
                                                {question.type === 'text' && <Input />}
                                                {question.type === 'number' && <InputNumber />}
                                                {question.type === 'select' &&
                                                    <Select>
                                                        {question.Options.map((option) => {
                                                            return (
                                                                <Option value={option.id}>{option.title}</Option>
                                                            )
                                                        })}
                                                    </Select>
                                                }
                                            </Form.Item>
                                        )
                                    })}
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        SOLICITAR COTIZACIÓN
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

export default FormView;
