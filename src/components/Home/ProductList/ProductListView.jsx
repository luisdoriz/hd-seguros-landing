import React from 'react';
import { Col, Row, Carousel } from 'antd';
import './styles.scss';

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
          <div className='card' style={{backgroundImage: 'url("https://via.placeholder.com/500")'}}>
            <h2 className='text'>Seguro de Gastos Médicos Mayores</h2>
          </div>
          <div className='card'>
            <h2 className='text'>Seguro de Maternidad</h2>
          </div>
          <div className='card'>
            <h2 className='text'>Seguro de Vida</h2>
          </div>
        </Carousel>
      </Col>
    </Row>
    </>
  );
};

export default ProductListView;
