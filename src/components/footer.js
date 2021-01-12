import React from 'react';
import { Row, Col } from 'react-bootstrap';
export const Footer = () => {
  return (
    <>
      <Row className='foot'>
        <Col md={6} className='foot-cont'>
          <div>
            <div className='foot-icon'>
              <h1>
                <i class='fa fa-map-marker' aria-hidden='true'></i>
              </h1>
            </div>
            <h1 className='foot-data'>
              - Hebe Boutique 450 Queen Street, Kuripuni, Masterton 5810
            </h1>
          </div>
          <div>
            <div className='foot-icon'>
              <h1>
                <i class='fa fa-phone' aria-hidden='true'></i>
              </h1>
            </div>
            <h1 className='foot-data'>- 0123456789</h1>
          </div>
          <div>
            <div className='foot-icon'>
              <h1>
                <i class='fa fa-envelope' aria-hidden='true'></i>
              </h1>
            </div>
            <h1 className='foot-data'>- info@hebe.com</h1>
          </div>
        </Col>
        <Col md={6} className='foot-cont'>
          <div className='foot-right'>
            <h1 className='foot-data-right'>Mon - Fri 10am - 4:30pm</h1>
            <h1 className='foot-data-right'> Sat 10am - 3pm </h1>
            <h1 className='foot-data-right'>Sun CLOSED</h1>
          </div>
          <div>
            <a href='#'>
              <h1 className='foot-icon-right'>
                <i class='fab fa-instagram'></i>
              </h1>
            </a>
            <a href='#'>
              <h1 className='foot-icon-right'>
                <i class='fab fa-twitter'></i>
              </h1>
            </a>
          </div>
        </Col>
        <Col>
          <p className='copy'>&#169; agentraghav github</p>
        </Col>
      </Row>
    </>
  );
};
