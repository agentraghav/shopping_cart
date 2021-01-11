import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
export const ShoppingBody = () => {
  return (
    <Row className='bk'>
      <Col md={12}>
        <h1 className='heading'>
          Season <span className='in-head'>Sale</span>
        </h1>
        <a className='shop-link' href='#'>
          Shop Now
        </a>
      </Col>
    </Row>
  );
};
