import React from 'react';
import Navigation from '../layout/Navigation';
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"

const HomePage = () => {
  return (
    <>
      <Navigation logoName={"logo.svg"} />
      <Container>
        <Row className="mt-4 mb-4">
          <Col>
            <div style={{height: '500px', backgroundColor: 'grey'}}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;