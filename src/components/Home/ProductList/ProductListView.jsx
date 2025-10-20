import React from 'react';
import { Col, Row, Card } from 'antd';
import { 
  MedicineBoxOutlined, 
  BookOutlined, 
  HeartOutlined, 
  GlobalOutlined, 
  CarOutlined,
  ArrowRightOutlined 
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
    <Row justify='center' gutter={[24, 24]}>
      {data.map((insurance, i) => (
        <Col 
          key={i} 
          xs={24} 
          sm={12} 
          md={8} 
          lg={6}
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
                description={
                  <div className="product-description">
                    <p>Protección completa para ti y tu familia</p>
                    <div className="product-features">
                      <span className="feature-tag">✓ Cobertura amplia</span>
                      <span className="feature-tag">✓ Sin complicaciones</span>
                    </div>
                  </div>
                }
              />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default ProductListView;
