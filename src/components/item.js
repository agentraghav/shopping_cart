import React from 'react';
import { Link } from 'react-router-dom';
import shopItems from '../data/data';
import { Row, Col, Image, Button } from 'react-bootstrap';
export const Item = ({ match, addItem }) => {
  let { itemID } = match.params;
  let itemData = shopItems.find((shopItem) => shopItem.id === itemID);
  let { id, name, brand, price, imgsrc } = itemData;
  return (
    <>
      <Row className='item-row'>
        <Col md={6}>
          <Image className='item-img' src={imgsrc}></Image>
        </Col>
        <Col md={6}>
          <h1 className='item-head'>{brand}</h1>
          <hr />
          <p className='item-sub'>{name}</p>
          <p className='item-sub'>
            <i class='fas fa-rupee-sign' /> {price}
          </p>
          <p className='item-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className='add-to' onClick={() => addItem(itemData)}>
            <i class='fas fa-shopping-bag'></i> Add To Cart
          </button>
          <Link to='/shopping_cart/cart'>
            <button className='add-to'>
              <i class='fa fa-check' aria-hidden='true'></i> Checkout
            </button>
          </Link>
        </Col>
      </Row>
    </>
  );
};
