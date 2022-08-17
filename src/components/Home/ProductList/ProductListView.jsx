import React from 'react';
import { Col, Row, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import './styles.scss';
import data from '../../../assets/texts/insurances.json';

const ProductListView = () => {
  return (
    <>
      <Row justify='center'>
        <Col>
          <h1 className='title'>Productos</h1>
        </Col>
      </Row>
      <Row className="carouselContainer">
        <Col span={24} >
          <Carousel autoplay dotPosition='top'>
            {
              data.map((insurance, i) => {
                return (
                  <Link key={i} to={`/insurance/${insurance.tag}`}>
                    <div className='card'>
                      <h2 className='text'>{insurance.name}</h2>
                    </div>
                  </Link>
                )
            })}
          </Carousel>
        </Col>
      </Row>
    </>
  );
};

export default ProductListView;
