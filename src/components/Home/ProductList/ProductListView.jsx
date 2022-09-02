import React from 'react';
import { Col, Row, Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import './styles.scss';

import data from '../../../assets/texts/insurances.json';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <LeftOutlined />
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <RightOutlined />
  </button>
);

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
          <Carousel arrows prevArrow={<SlickArrowLeft />} nextArrow={<SlickArrowRight />} autoplay dotPosition='top'>
            {
              data.map((insurance, i) => {
                return (
                  <Link key={i} to={`/insurance/${insurance.tag}`}>
                    <div className='card'>
                      <img className='carouselImg' alt={`${insurance.tag}`} src={require(`../../../assets/images/${insurance.tag}.jpg`)} />
                      <div className='carouselText'><h2 className='titleCarousel'>{insurance.name}</h2></div>
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
