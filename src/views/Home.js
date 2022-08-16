import { Row, Col, Button } from 'antd';
import React, { useRef } from 'react';
import { ContactUs, ProductList } from '../components/Home';
import data from "../assets/texts/general.json";

import doctorImg from '../assets/images/doctor.png';

const Home = () => {
  const productsRef = useRef(null);
  const handleClick = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="home">
      <Row>
        <Col span={14}>
          <div className="homeText">
            <h1>
              {data.title.split(" ").map(word => {
                return (
                  word === "Asegura" ? <span className='accent'>{word.concat(" ")}</span> : <span>{word.concat(" ")}</span>
                )
              })}
            </h1>
            <h2>{data.subtitle[0]}</h2>
            <h3>
              {data.pitch[0]}
            </h3>
            <Button
              onClick={handleClick}
              className="paddingT"
              type="primary"
              shape='round'
              size='large'
            >
              Ver productos
            </Button>
          </div>
        </Col>
        <Col span={10}>
          <img className="homeImg" src={doctorImg} alt="doctor" />
        </Col>
      </Row>
      <Row>
        <Col className='paddingT'>
          <div className="banner">
            <h2>
              {data.subtitle[1].split(" ").map(word => {
                return (
                  word === "seguro" ? <span className='accent'>{word.concat(" ")}</span> : <span>{word.concat(" ")}</span>
                )
              })}
            </h2>
            <h3>
              {data.pitch[1]}
            </h3>
          </div>
        </Col>
      </Row>
      <div ref={productsRef} className="container">
        <ProductList />
      </div>
      <ContactUs />
    </div>
  );
};

export default Home;
