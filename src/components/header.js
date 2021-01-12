import React from 'react';
import '../styles/styles.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
export const Header = ({ getItemsInCart }) => {
  let itemsInCart = getItemsInCart;
  return (
    <Navbar fixed='top' className='nav-style' expand='lg' variant='light'>
      <Container>
        <Link to='/shopping_cart/'>
          <Image
            className='logo-image'
            src='https://cdn.shopify.com/s/files/1/1132/3440/t/4/assets/logo.png?v=16492789083930716568'
            responsive
          />
        </Link>
        <Nav className='justify-content-end'>
          <Link to='/shopping_cart/'>
            <li className='nav-links'>Home</li>
          </Link>
          <Link to='/shopping_cart/shop'>
            <li className='nav-links'>Shop</li>
          </Link>
          <Link to='/shopping_cart/about'>
            <li className='nav-links'>About Us</li>
          </Link>
          <Link to='/shopping_cart/cart'>
            <li className='cart'>
              <i className='fa fa-shopping-cart' aria-hidden='true'></i>
              {itemsInCart ? `(${itemsInCart})` : null}
            </li>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
