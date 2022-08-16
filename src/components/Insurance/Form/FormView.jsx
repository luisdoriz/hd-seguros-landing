// eslint-disable-no-template-curly-in-string
import React, { Component } from 'react';
import { Col, Row, Input, InputNumber, Select, Form, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const validateMessages = {
    required: '¡Este campo es requerido!',
    pattern: 'No tiene el formato correcto.',
    types: {
        email: '¡No es un correo válido!',
    },
};

class FormView extends Component {
    formRef = React.createRef();

    onFinish = (values) => {
        const { idSurvey, saveForm } = this.props;
        const ids = Object.keys(values);
        const answers = [];
        ids.forEach((id) => {
            answers.push({ idQuestion: parseInt(id), response: values[id] });
        })
        const body = { idSurvey: idSurvey, answers: answers }
        saveForm(body);
    };

    render() {
        const { questions, outlined, text } = this.props;
        return (
            <Row className='container'>
                <Col span={24}>
                    <div className={outlined ? 'CUcard' : ''}>
                        <Row>
                            <Col span={24}>
                                <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish} validateMessages={validateMessages}>
                                    <Col>
                                        {
                                            questions.map((question) => {
                                                return (
                                                    <Form.Item
                                                        label={question.sentence}
                                                        name={question.id}
                                                        key={question.id}
                                                        rules={[{
                                                            required: true
                                                        }]}
                                                    >
                                                        {question.type === 'text' ? <Input /> :
                                                            question.type === 'number' ? <InputNumber /> :
                                                                question.type === 'comment' ? <TextArea /> :
                                                                    question.type === 'select' ?
                                                                        <Select>
                                                                            {question.Options.map((option) => {
                                                                                return (
                                                                                    <Option value={option.title}>{option.title}</Option>
                                                                                )
                                                                            })}
                                                                        </Select>
                                                                        : ''
                                                        }
                                                    </Form.Item>
                                                )

                                            })}
                                    </Col>
                                    <Col style={{
                                        textAlign: 'center',
                                    }}>
                                        <Form.Item key="button">
                                            <Button type="primary" shape="round" htmlType="submit">
                                                {text}
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default FormView;