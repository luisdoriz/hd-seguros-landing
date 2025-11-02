import React from 'react';
import { Col, Row, Card } from 'antd';
import {
  MedicineBoxOutlined,
  BookOutlined,
  HeartOutlined,
  GlobalOutlined,
  CarOutlined,
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined
} from "@ant-design/icons";
import { Link } from 'react-router-dom';
import './styles.scss';

import data from '../../../assets/texts/insurances.json';

const getInsuranceIcon = (tag) => {
  const iconMap = {
    medical: <MedicineBoxOutlined />,
    educational: <BookOutlined />,
    maternity: <HeartOutlined />,
    travel: <GlobalOutlined />,
    car: <CarOutlined />
  };
  return iconMap[tag] || <MedicineBoxOutlined />;
};

// Carousel arrow components (currently unused but available for future carousel implementation)
// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
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
    <Row justify='center' gutter={[32, 32]}>
      {data.map((insurance, i) => (
        <Col
          key={i}
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={8}
          xxl={8}
          className="product-col"
        >
          <Link to={`/insurance/${insurance.tag}`} className="product-link">
            <Card 
              className="product-card"
              cover={
                <div className="product-image-container">
                  <img 
                    className="product-image" 
                    alt={insurance.tag} 
                    src={require(`../../../assets/images/${insurance.tag}.jpg`)} 
                  />
                  <div className="product-overlay">
                    <div className="product-icon">
                      {getInsuranceIcon(insurance.tag)}
                    </div>
                  </div>
                </div>
              }
              hoverable
            >
              <Card.Meta
                title={
                  <div className="product-title">
                    <h3>{insurance.name}</h3>
                    <ArrowRightOutlined className="arrow-icon" />
                  </div>
                }
                description={null}
              />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductListView;
