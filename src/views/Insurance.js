import React from 'react';
import { Row, Col, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import useForms from '../hooks/Forms/useForms';
import { Form } from '../components/Insurance';

import doctorImg from '../assets/images/doctor.png';

const Insurance = () => {
    const { id } = useParams();
    const { form, saveForm, questions, loading } = useForms(id);
    let medicalForm = form[1];
    const sentence = "Protegerte a ti y a tu familia ahora es muy fácil";
    const arr = sentence.split(" ");
    const insuranceType = medicalForm?.QuoteType;
    return (
        <div className="home">
            {loading ?
                <div className='loader'>
                    <Spin size="large" />
                </div>
                :
                <>
                    <Row>
                        <Col className='paddingT' span={24}>
                            <div className="header">
                                <h2 className='title'>{insuranceType?.name}</h2>
                                <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus cursus mi.
                                </h3>
                            </div>
                        </Col>
                    </Row>
                    <Row className="paddingT">
                        <Col span={12}>
                            <div className="homeText">
                                <h1>
                                    {arr.map(word => {
                                        return (
                                            word === "familia" ? <span className='accent'>{word.concat(" ")}</span> : <span>{word.concat(" ")}</span>
                                        )
                                    })}
                                </h1>
                                <h2>Contrata un seguro</h2>
                                <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus cursus mi, sed maximus enim elementum eget. Maecenas nec lacus at risus hendrerit facilisis eget congue nunc. In aliquam tellus quis velit tempor, et fringilla dolor feugiat. Curabitur elementum pulvinar tortor, at porta libero aliquet et. Phasellus
                                </h3>
                            </div>
                        </Col>
                        <Col span={12}>
                            <Form questions={questions} saveForm={saveForm} />
                        </Col>
                    </Row>
                    <Row className="paddingT">
                        <Col span={14}>
                            <div className="homeText">
                                <h1>
                                    {arr.map(word => {
                                        return (
                                            word === "familia" ? <span className='accent'>{word.concat(" ")}</span> : <span>{word.concat(" ")}</span>
                                        )
                                    })}
                                </h1>
                                <h2>Contrata un seguro</h2>
                                <h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus cursus mi, sed maximus enim elementum eget. Maecenas nec lacus at risus hendrerit facilisis eget congue nunc. In aliquam tellus quis velit tempor, et fringilla dolor feugiat. Curabitur elementum pulvinar tortor, at porta libero aliquet et. Phasellus
                                </h3>
                            </div>
                        </Col>
                        <Col span={10}>
                            <img className="homeImg" src={doctorImg} alt="doctor" />
                        </Col>
                    </Row>
                </>
            }
        </div>
    );
};

export default Insurance;
