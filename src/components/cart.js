import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const Cart = ({ cartItems, removeItem, addItem, getCartItems }) => {
  let itemsInCart = getCartItems;
  let cartTotal = cartItems
    .map((itemData) => itemData.price * itemData.quantity)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <Row className='cart-row'>
        <Col md={12}>
          <h1 className='heading-main'>Your Cart</h1>
          <hr className='cart-hr' />
        </Col>
        {cartItems.map((cartItem) => {
          let { id, name, brand, price, imgsrc } = cartItem;
          return (
            <>
              <Col md={6}>
                <Image className='cart-img' src={imgsrc} />
              </Col>
              <Col md={6}>
                <h1 className='cart-head'>{brand}</h1>
                <p className='cart-sub'>{name}</p>
                <p className='cart-sub'>
                  <i class='fas fa-rupee-sign' /> {price}
                </p>
                <div>
                  <button
                    className='cart-quan'
                    onClick={() => removeItem(cartItem)}>
                    -
                  </button>
                  <p className='cart-inc-dec'>
                    {itemsInCart ? `(${itemsInCart})` : 0}
                  </p>
                  <button
                    className='cart-quan'
                    onClick={() => addItem(cartItem)}>
                    +
                  </button>
                </div>
              </Col>
              <hr className='hr-item' />
            </>
          );
        })}

        {cartItems.length > 0 ? (
          <Col md={12}>
            <p className='pay'>
              Total Amount : <i class='fas fa-rupee-sign' />
              {Math.round(cartTotal * 100) / 100}
            </p>
            <button className='add-to'>Pay</button>
          </Col>
        ) : (
          <Col md={12}>
            <h1 className='empt'>Cart Is Empty</h1>
          </Col>
        )}
      </Row>
    </>
  );
};
