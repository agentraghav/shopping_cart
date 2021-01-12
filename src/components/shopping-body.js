import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import '../styles/styles.css';
import { Link } from 'react-router-dom';
export const ShoppingBody = () => {
  return (
    <>
      <Row className='mid-cont'>
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
          <h1 className='heading-main'>Deals Of The Day</h1>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Link to='/shopping_cart/shop'>
            <Image
              className='home-content'
              src='https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'></Image>
          </Link>
          <div>
            <h1 className='content-head'>Min 20% Off</h1>
            <div>
              <span className='content-sub'>On Men's Clothing</span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Link to='/shopping_cart/shop'>
            <Image
              className='home-content'
              src='https://image.freepik.com/free-photo/stacked-blue-jeans-white-background_23-2147889060.jpg'></Image>
          </Link>
          <div>
            <h1 className='content-head'>Min 25% Off</h1>
            <div>
              <span className='content-sub'>On Levis</span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Link to='/shopping_cart/shop'>
            <Image
              className='home-content'
              src='https://img5.goodfon.com/wallpaper/nbig/f/2c/adidas-krossovki-belyi-fon.jpg'></Image>
          </Link>
          <div>
            <h1 className='content-head'>Min 40% Off</h1>
            <div>
              <span className='content-sub'>On Men's Footwear</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mid-cont'>
        <Col md={4}>
          <Link to='/shopping_cart/shop'>
            <Image
              className='home-content'
              src='https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'></Image>
          </Link>
          <div>
            <h1 className='content-head'>Min 20% Off</h1>
            <div>
              <span className='content-sub'>On Men's Clothing</span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Link to='/shopping_cart/shop'>
            <Image
              className='home-content'
              src='https://image.freepik.com/free-photo/stacked-blue-jeans-white-background_23-2147889060.jpg'></Image>
          </Link>
          <div>
            <h1 className='content-head'>Min 25% Off</h1>
            <div>
              <span className='content-sub'>On Levis</span>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Link to='/shopping_cart/shop'>
            <Image
              className='home-content'
              src='https://img5.goodfon.com/wallpaper/nbig/f/2c/adidas-krossovki-belyi-fon.jpg'></Image>
          </Link>
          <div>
            <h1 className='content-head'>Min 40% Off</h1>
            <div>
              <span className='content-sub'>On Men's Footwear</span>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='para'>
        <Col md={12}>
          <h1 className='para-head'>Shop At Hebe.</h1>
        </Col>
      </Row>
    </>
  );
};
