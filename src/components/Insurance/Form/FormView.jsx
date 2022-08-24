// eslint-disable-no-template-curly-in-string
import React, { Component } from 'react';
import { Col, Row, Input, InputNumber, Select, Form, Button } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

const renderFormQuestion = (question) => {
    let pattern = /^.+$/
    if (question.pattern) {
        pattern = new RegExp(question.pattern);
    }
    return (
        <Form.Item
            label={<h4 className='title'>{question.sentence}</h4>}
            name={question.id}
            key={question.id}
            rules={[{
                required: true,
                pattern: pattern,
                message: 'Favor de llenar el campo con el formato correcto'
            }]}
        >
            {
                question.type === 'text' ? <Input style={{ borderRadius: "8px" }} /> :
                question.type === 'number' ? <InputNumber style={{ borderRadius: "8px", width: "100%" }} /> :
                question.type === 'comment' ? <TextArea style={{ borderRadius: "8px" }} /> :
                question.type === 'select' &&
                    <Select >
                        {question.Options.map((option) => {
                            return (
                                <Option value={option.title} key={option.id}>{option.title}</Option>
                            )
                        })}
                    </Select>
            }
        </Form.Item>
    )

}

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
                                <Form ref={this.formRef} layout="vertical" onFinish={this.onFinish} >
                                    <Col>
                                        {
                                            questions.map(
                                                renderFormQuestion
                                            )
                                        }
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