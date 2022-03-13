import React from 'react';
import Navigation from './Navigation';
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Carousel, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const Block = () => {

  return (
    <Row>
      <Col lg={{ span: 10, offset: 1 }}>
        <Card className="mt-5 bg-primary">
          <Card.Body className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h5 className="text-white">Amazing Gifts</h5>
              <span className="text-white">No matter how far along you are in your sophistication</span>
            </div>
            <div>
              <Button variant="warning">View more</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Block