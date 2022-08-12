// eslint-disable-no-template-curly-in-string
import React from 'react';
import { Col, Row, Input, InputNumber, Select, Form, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const FormView = ({ questions, saveForm, outlined = true, button = "SOLICITAR COTIZACIÓN" }) => {
    const onFinish = (values) => {
        console.log(values);
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
                <div className={outlined ? 'CUcard' : ''}>
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
                                                key={question.id}
                                                rules={[{ required: true }]}
                                            >
                                                {question.type === 'text' && <Input />}
                                                {question.type === 'number' && <InputNumber />}
                                                {question.type === 'comment' && <TextArea />}
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
                                    <Button type="primary" htmlType="submit" shape='round' size='large'>
                                        {button}
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
