import React from 'react';
import Navigation from '../layout/Navigation';
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap"
import { useIsAuthenticated, useAuthUser } from 'react-auth-kit';

const HomePage = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser()

  return (
    <>
      <Navigation logoName={"logo.svg"} />
      <Container>
        { isAuthenticated() ? auth().name : 'Not authenticated' }
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