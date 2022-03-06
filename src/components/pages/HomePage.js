import React from 'react';
import Navigation from '../layout/Navigation';
import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap"
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';

const HomePage = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser()

  return (
    <>
      <Navigation logoName={"logo.svg"} />
      <Container>
        { isAuthenticated() ? auth().name : 'Not authenticated' }
      </Container>

        <Container>
          <Row className='gx-3'>
            <Col lg={9}>
              <Card.Body className='card-banner p-5 bg-primary' style={{height: "350px"}}>
                <div style={{maxWidth: "500px"}}>
                  <h1 className=''>Great products with <br/> best deals </h1>
                  <p>No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                  <a href={window.location.href} className="btn btn-warning"> View more </a>
                </div>
              </Card.Body>
            </Col>
            <Col lg={3}>
              <Card class="card-banner h-100" style={{backgroundColor: "var(--bs-warning)"}}>
                <Card.Body class="card-body right text-center mt-4" style={{height: "250px"}}>
                  <h5 class="mt-3 text-white">Amazing Gifts</h5>
                  <p class="text-white">No matter how far along you are in your sophistication</p>
                  <a href={window.location.href} className="btn btn-outline-light"> View more </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default HomePage;