import React from 'react';
import '../styles/styles.css';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
export const Header = () => {
  return (
    <Navbar className='nav-style' expand='lg' variant='light'>
      <Container>
        <Navbar.Brand href='#home'>
          <Image
            className='logo-image'
            src='https://cdn.shopify.com/s/files/1/1132/3440/t/4/assets/logo.png?v=16492789083930716568'
            responsive
          />
        </Navbar.Brand>
        <Nav className='justify-content-end'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About US</Nav.Link>
          <Nav.Link href='#contact'>Contact Us</Nav.Link>
          <Nav.Link className='cart' href='#pricing'>
            <i className='fa fa-shopping-cart' aria-hidden='true'></i>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
