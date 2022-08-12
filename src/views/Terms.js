import { Row, Col } from 'antd';
import React from 'react';
import data from "../assets/texts/terms.json";

const Terms = () => {
  return (
    <div className="terms">
      <Row>
        <Col span={24} className='paddingT'>
          <div className="banner termsHeader">
            <h2>
              Términos y condiciones
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <div className='container '>
          <h3 className='terms'>
            {data.terms}
          </h3>
        </div>
      </Row>
    </div>
  );
};

export default Terms;
