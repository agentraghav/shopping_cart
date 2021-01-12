import React, { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import shopItems from '../data/data';
import '../styles/styles.css';
export const Shop = () => {
  let [displayItems, setDisplayItems] = useState(shopItems);
  return (
    <>
      <Row className='shop-bg'>
        <Col md={12}></Col>
      </Row>
      <Row>
        <Col md={12}>
          <h1 className='heading-main'>Featured Products</h1>
        </Col>
      </Row>
      <Row>
        {displayItems.map((item) => {
          let { id, name, brand, price, imgsrc } = item;
          return (
            <Col style={{ marginTop: '20px' }} md={4} key={id}>
              <Link to={`/shopping_cart/shop/${id}`}>
                <Image className='home-content' src={imgsrc}></Image>
              </Link>
              <div>
                <h1 className='shop-head'>{brand}</h1>
                <div>
                  <p className='shop-sub'>{name}</p>
                </div>
                <div>
                  <p style={{ marginTop: '0px' }} className='shop-sub'>
                    <i class='fas fa-rupee-sign' /> {price}
                  </p>
                  <div>
                    <Link to={`/shopping_cart/shop/${id}`}>
                      <button className='man-butt-shop'>
                        <i class='fa fa-shopping-bag' aria-hidden='true'></i>{' '}
                        Buy-Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </>
  );
};
