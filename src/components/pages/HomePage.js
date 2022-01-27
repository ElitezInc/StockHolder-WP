import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Navigation from '../Navigation';

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