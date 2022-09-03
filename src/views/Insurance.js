import React from 'react';
import { Row, Col, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import useForms from '../hooks/Forms/useForms';
import { Form } from '../components/Insurance';

import data from '../assets/texts/insurances.json';

const Insurance = () => {
  const { type } = useParams();
  const info = data.find((insurance) => insurance.tag === type);
  const id = info.id;
  const { form, saveForm, questions, loading } = useForms(id);
  const insuranceType = form?.QuoteType;
  return (
    <div className="home">
      {loading ? (
        <div className="loader">
          <Spin size="large" />
        </div>
      ) : (
        <>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
            <Col span={24}>
              <div className="header">
                <h2 className="title">{insuranceType?.name}</h2>
                <h3>{info.subtitle[0]}</h3>
              </div>
            </Col>
          </Row>
          <Row
            className="paddingT"
            justify="center"
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col xs={{ span: 15 }} sm={{ span: 20 }} md={{ span: 10 }}>
              <div className="homeText container">
                <h1>
                  {info.title[0].split(' ').map((word, i) => {
                    return word === 'familia' || word === 'futuro' ? (
                      <span className="accent" key={i}>
                        {word.concat(' ')}
                      </span>
                    ) : (
                      <span key={i}>{word.concat(' ')}</span>
                    );
                  })}
                </h1>
                <h2>
                  {info.subtitle[1].split(' ').map((word, i) => {
                    return word === 'Seguro' ? (
                      <span className="accent" key={i}>
                        {word.concat(' ')}
                      </span>
                    ) : (
                      <span key={i}>{word.concat(' ')}</span>
                    );
                  })}
                </h2>
                <h3>
                  {info.promotional[0].split(' ').map((word, i) => {
                    return word === 'br' ? <br key={i} /> : word.concat(' ');
                  })}
                </h3>
              </div>
            </Col>
            <Col
              xs={{ span: 15 }}
              sm={{ span: 20 }}
              md={{ span: 10 }}
              align="center"
            >
              <Form
                idSurvey={id}
                questions={questions}
                saveForm={saveForm}
                outlined={true}
                text="SOLICITAR COTIZACIÓN"
              />
            </Col>
          </Row>
          <Row className="paddingT paddingB" justify="center" align="middle">
            <Col xs={{ span: 15 }} sm={{ span: 20 }} md={{ span: 12 }}>
              <div className="homeText">
                <h1>
                  {info.title[1].split(' ').map((word, i) => {
                    return word === 'Seguro' ? (
                      <span className="accent" key={i}>
                        {word.concat(' ')}
                      </span>
                    ) : (
                      <span key={i}>{word.concat(' ')}</span>
                    );
                  })}
                </h1>
                <h2>
                  {info.subtitle[2].split(' ').map((word, i) => {
                    return word === 'Ventajas' || word === 'Seguro' ? (
                      <span className="accent" key={i}>
                        {word.concat(' ')}
                      </span>
                    ) : (
                      <span key={i}>{word.concat(' ')}</span>
                    );
                  })}
                </h2>
                <h3>
                  {info.promotional[1].split(' ').map((word, i) => {
                    return word === 'br' ? <br key={i} /> : word.concat(' ');
                  })}
                </h3>
              </div>
            </Col>
            <Col
              xs={{ span: 15 }}
              sm={{ span: 20 }}
              md={{ span: 8 }}
              align="center"
            >
              <img
                className="homeImg"
                src={require(`../assets/images/${type}.png`)}
                alt="doctor"
              />
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Insurance;
