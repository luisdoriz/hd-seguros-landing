import React from 'react';
import { DatePicker, Col, Row } from 'antd';
import './styles.scss';

import oldManImg from '../../assets/images/old-man.jpeg';

const HelloWorld = ({ msg }) => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <Row justify='F' className="hello-word_container">
      <Col span={12}>
        <img className="hello-word_banner" src={oldManImg} alt="old-man" />
      </Col>
      <Col>
        <DatePicker onChange={onChange} />
      </Col>
    </Row>
  );
};

export default HelloWorld;
