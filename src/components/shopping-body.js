import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
export const ShoppingBody = () => {
  return (
    <>
      <Row>
        <Col className='bk' md={12}>
          <h1 className='heading'>
            Season <span className='in-head'>Sale</span>
          </h1>
          <a className='shop-link' href='#'>
            Shop Now
          </a>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className='heading-main'>Featured Products</h1>
        </Col>
      </Row>
    </>
  );
};
