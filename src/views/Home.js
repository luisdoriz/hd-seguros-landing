import { Row, Col, Button } from 'antd';
import React, { useRef } from 'react';
import { ContactUs, ProductList } from '../components/Home';
import data from '../assets/texts/general.json';

import doctorImg from '../assets/images/doctor.png';

const getText = () =>
  data.title.split(' ').map((word, i) => {
    return word === 'Asegura' ? (
      <span className="accent" key={i}>
        {word.concat(' ')}
      </span>
    ) : (
      <span key={i}>{word.concat(' ')}</span>
    );
  });

const Home = () => {
  const productsRef = useRef(null);
  const handleClick = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="home">
      <Row
        justify="center"
        align="middle"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{paddingBottom: "30px"}}
      >
        <Col
          xs={{ order: 2, span: 15 }}
          sm={{ order: 2, span: 20 }}
          md={{ order: 1, span: 10 }}
        >
          <div className="homeText">
            <h1>{getText()}</h1>
            <h2>{data.subtitle[0]}</h2>
            <h3>{data.pitch[0]}</h3>
            <Button
              onClick={handleClick}
              className="paddingT"
              type="primary"
              shape="round"
              size="large"
            >
              Ver productos
            </Button>
          </div>
        </Col>
        <Col
          align="center"
          sm={{ order: 1, span: 18 }}
          md={{ order: 2, span: 10 }}
        >
          <img className="homeImg" src={doctorImg} alt="doctor" />
        </Col>
      </Row>
      <Row
        className="banner"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        justify="center"
      >
        <Col span={20}>
          <div ref={productsRef}>
            <h2>
              {data.subtitle[1].split(' ').map((word, i) => {
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
              {data.pitch[1].split(' ').map((word, i) => {
                return word === 'br' ? <br key={i} /> : word.concat(' ');
              })}
            </h3>
            <p style={{ color: 'white' }}>{data.text[0]}</p>
          </div>
        </Col>
      </Row>
      <div className="container">
        <ProductList />
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
