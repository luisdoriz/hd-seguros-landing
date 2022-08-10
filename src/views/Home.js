import { Row, Col, Button } from 'antd';
import React, {useRef} from 'react';
import { ContactUs, ProductList } from '../components/Home';

import doctorImg from '../assets/images/doctor.png';

const Home = () => {
  const productsRef = useRef(null);
  const handleClick = () => {
    productsRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  const pitch = ["Contrata ", "un ", "Seguro"];
  const sentence  = "Asegura a tu familia en caso de accidentes";
  const arr = sentence.split(" ");
  return (
    <div className="home">
      <Row>
        <Col span={14}>
          <div className="homeText">
            <h1>
              {arr.map( word => {
                return (
                  word === "Asegura" ? <span className='accent'>{word.concat(" ")}</span> : <span>{word.concat(" ")}</span>
                )
              })}
            </h1>
            <h2>Contrata un seguro</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus cursus mi, sed maximus enim elementum eget. Maecenas nec lacus at risus hendrerit facilisis eget congue nunc. In aliquam tellus quis velit tempor, et fringilla dolor feugiat. Curabitur elementum pulvinar tortor, at porta libero aliquet et. Phasellus
            </h3>
            <Button 
              onClick={handleClick}
              className="paddingT"
              type="primary"
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
              {pitch.map( word => {
                return (
                  word === "Seguro" ? <span className='accent'>{word}</span> : <span className='secondary'>{word}</span>
                )
              })}
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus cursus mi, sed maximus enim elementum eget. Maecenas nec lacus at risus hendrerit facilisis eget congue nunc. In aliquam tellus quis velit tempor, et fringilla dolor feugiat. Curabitur elementum pulvinar tortor, at porta libero aliquet et. Phasellus
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
