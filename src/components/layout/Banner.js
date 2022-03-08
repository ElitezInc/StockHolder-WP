import React from 'react';
import Navigation from '../layout/Navigation';
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Row className='gx-3'>
        <Col lg={9}>
          <Card.Body className='card-banner p-5 bg-primary'>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: "350px" }}>
              <Carousel.Item>
                <div className="my-5" style={{maxWidth: "500px"}}>
                  <h2 className="text-white">Great products with <br/> best deals </h2>
                  <p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                  <a href="#" className="btn btn-warning"> View more </a>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <article className="my-5">
                  <h1 className="display-4 text-white"> Best products &amp; brands in our store  </h1>
                  <p className="lead text-white">Trendy Products, Factory Prices, Excellent Service</p>
                  <a href="#" className="btn btn-warning"> Purchase now</a> 
                  <a href="#" className="btn btn-light ms-1"> Learn more </a>
                </article>                                
              </Carousel.Item>                                                    
              <Carousel.Item>
              <div className="my-5" style={{maxWidth: "500px"}}>
                  <h2 className="text-white">Best products & Best options  <br/> It is waiting for you! </h2>
                  <p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                  <a href="#" className="btn btn-warning"> Buy Now </a>
                </div>
              </Carousel.Item>
            </Carousel>          
          </Card.Body>       
        </Col>

        <Col lg={3}>
          <Card className="card-banner h-100" style={{ backgroundColor: "var(--bs-warning)" }}>
            <Card.Body className="card-body right text-center mt-4" style={{ height: "250px" }}>
              <h5 className="mt-3 text-white">Amazing Gifts</h5>
              <p className="text-white">No matter how far along you are in your sophistication</p>
              <a href={window.location.href} className="btn btn-outline-light"> View more </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;